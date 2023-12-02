import fs from 'fs';
import * as path from 'path';
import { yarg } from './config/plugins/args.plugin';

const { b:base, l:limit, s:showTable } = yarg;

let outputMessage: string = '';

const headerMessage: string =`
================================
\t|    Table to ${base}   |\t
================================\n
`;


  outputMessage = headerMessage + outputMessage;
  if (showTable){
    console.log(outputMessage);
  }

const outputPath = `outputs`;

if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
  console.log(`Folder ${outputPath} created`);  
}


fs.writeFileSync(`./${outputPath}/table-${base}.txt`, outputMessage);
console.log(`File table-${base}.txt created`);





