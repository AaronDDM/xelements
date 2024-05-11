import compiler from "./compiler/index.js";

compiler({
    rootNames: process.argv.slice(2),
    currentDir: process.cwd()
})