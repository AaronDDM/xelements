import ts, { CompilerOptions } from 'typescript';
import transformer from './transformer.js';


export default function compiler({ rootNames, currentDir, compilerOptions }: {rootNames: string[], currentDir: string, compilerOptions?: CompilerOptions }) {
  console.debug('[compiler] tsconfig', compilerOptions)

  const program = ts.createProgram({
    rootNames,
    options: {
      outDir: "./dist/",
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      target: ts.ScriptTarget.ES2020,
      lib: ["DOM","ES2023","ESNext.Decorators"],
      jsx: ts.JsxEmit.ReactJSX,
      jsxImportSource: "preact",
      types: ["preact"],
      moduleDetection: ts.ModuleDetectionKind.Auto,
      ...(compilerOptions ? compilerOptions : {})
    },
  });


  const result = program.emit(
    undefined,
    (fileName, content) => {
      ts.sys.writeFile(fileName, `/* @generated */${ts.sys.newLine}${content}`);
    },
    undefined,
    undefined,
    {
      before: [
        transformer(currentDir)
      ]
    }
  )

  console.debug("Ran compiler", { result })
}