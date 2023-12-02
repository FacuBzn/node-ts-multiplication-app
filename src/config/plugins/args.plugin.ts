import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    description: 'multiplication table base',
  })
  .option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    description: 'multiplication table limit',
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    description: 'show multiplication table',
  })
  .option('n', {
    alias: 'name',
    type: 'string',
    default: 'multiplication-table',
    description: 'File name',
  })
  .options('d', {
    alias: 'destination',
    type: 'string',
    default: 'outputs',
    description: 'File destination',
  })
  .check((argv, options) => {
    
    if (argv.b < 1)  throw 'Error: b must be greater than zero.' 
    
    return true;
  })

  .parseSync();


