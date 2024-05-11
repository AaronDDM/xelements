import ts from 'typescript';
import fs from 'fs';
import path from 'path';
import * as sass from 'sass';

function addStyleMethodTransformer<T extends ts.Node>(cwd: string, context: ts.TransformationContext) {
  return (rootNode: T) => {
    function visit(node: ts.Node): ts.VisitResult<ts.Node> {
      if (ts.isClassDeclaration(node) && node.modifiers) {
        const decorators = node.modifiers.filter(modifier => modifier.kind === ts.SyntaxKind.Decorator) as ts.Decorator[];

        const componentDecorator = decorators.find(decorator => {
          if (!ts.isCallExpression(decorator.expression)) return false;
          const callExpr = decorator.expression;
          const identifier = callExpr.expression;
          return ts.isIdentifier(identifier) && identifier.text === 'Component';
        });

        if (componentDecorator && ts.isCallExpression(componentDecorator.expression)) {
          const decoratorArg = componentDecorator.expression.arguments[0];
          let scssFilePath: string | undefined;

          if (ts.isObjectLiteralExpression(decoratorArg)) {
            decoratorArg.properties.forEach(prop => {
              if (
                ts.isPropertyAssignment(prop) &&
                ts.isIdentifier(prop.name) &&
                prop.name.text === 'style' &&
                ts.isStringLiteral(prop.initializer)
              ) {
                scssFilePath = prop.initializer.text;
              }
            });
          }

          let cssContent = '';

          if (scssFilePath) {
            const directory = path.dirname(componentDecorator.parent.getSourceFile().fileName)
            const styleFile = path.join(cwd, directory, scssFilePath)
            const scssFileFullPath = path.resolve(styleFile);
            if (fs.existsSync(scssFileFullPath)) {
              const result = sass.compile(scssFileFullPath);
              cssContent = result.css.toString();
            } else {
              throw new Error('Looks like the scss file path you provided does not exist.')
            }
          }

          // Check if the class already has a method named 'injectStyles'
          const hasStyleMethod = node.members.some(member =>
            ts.isMethodDeclaration(member) && ts.isIdentifier(member.name) && member.name.text === 'injectStyles'
          );

          if (hasStyleMethod) {
            throw new Error('Please remove your `injectStyles` method decleration')
          }

          const styleMethod = ts.factory.createMethodDeclaration(
            undefined,
            undefined,
            ts.factory.createIdentifier('injectStyles'),
            undefined,
            undefined,
            [
              ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                "shadowRoot"
              )
            ],
            undefined,
            ts.factory.createBlock([
              ts.factory.createVariableStatement(
                undefined,
                ts.factory.createVariableDeclarationList(
                  [ts.factory.createVariableDeclaration(
                    ts.factory.createIdentifier('style'),
                    undefined,
                    undefined,
                    ts.factory.createCallExpression(
                      ts.factory.createPropertyAccessExpression(
                        ts.factory.createIdentifier('document'),
                        ts.factory.createIdentifier('createElement')
                      ),
                      undefined,
                      [ts.factory.createStringLiteral('style')]
                    )
                  )],
                  ts.NodeFlags.Const
                )
              ),
              ts.factory.createExpressionStatement(
                ts.factory.createAssignment(
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier('style'),
                    ts.factory.createIdentifier('textContent')
                  ),
                  ts.factory.createStringLiteral(cssContent)
                )
              ),
              ts.factory.createExpressionStatement(
                ts.factory.createCallExpression(
                  ts.factory.createPropertyAccessExpression(
                    ts.factory.createIdentifier('shadowRoot'),
                    ts.factory.createIdentifier('appendChild')
                  ),
                  undefined,
                  [ts.factory.createIdentifier('style')]
                )
              )
            ], true)
          );

          return ts.factory.updateClassDeclaration(
            node,
            node.modifiers,
            node.name,
            node.typeParameters,
            node.heritageClauses,
            [...node.members, styleMethod]
          );
        }
      }

      return ts.visitEachChild(node, visit, context);
    }

    return ts.visitNode(rootNode, visit) as T;
  };
};

const transformer = (cwd: string): ts.TransformerFactory<ts.SourceFile> => context => {
  return sourceFile => {
    return ts.visitNode(sourceFile, addStyleMethodTransformer(cwd, context)).getSourceFile()
  };
};

export default transformer;
