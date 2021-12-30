// Author: Mitch Allen
// File: parser.js

import { readFileSync } from 'fs';
import Ajv from 'ajv';

const ajv = new Ajv();

export function parser( inputFile, schemaFile ) {

    function readJsonFile(file) {
        let raw = readFileSync(file);
        return JSON.parse(raw);
    }

    let input = readJsonFile(inputFile);
    let schema = readJsonFile(schemaFile);

    const isValid = ajv.validate(schema, input);

    if (!isValid) {
        console.error(JSON.stringify(ajv.errors, null, 2));
        return undefined;
    }
        
    console.info('[INFO] Valid!');

    return input;
}

