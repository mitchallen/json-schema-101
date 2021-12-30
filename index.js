// Author: Mitch Allen
// File: index.js

import { parser } from './parser.js';

function main() {

    let args = process.argv.slice(2);

    if (args.length < 2) {
        console.log('USAGE: node index.js test-files/good.json test-files/schema.json');
        return;
    }

    let [inputFile, schemaFile] = args;

    console.log(`input file: ${inputFile}`);
    console.log(`schema file: ${schemaFile}`);

    let json = parser( inputFile, schemaFile );

    if( !json ) {
        console.error(`[ERROR] input not valid!`);
        return;
    }

    console.log(JSON.stringify(json,null,2))
    
}

main();

