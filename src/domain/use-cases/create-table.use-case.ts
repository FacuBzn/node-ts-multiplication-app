export interface CreateTableUseCase {
  execute: (options: CreateTableOptions ) => string;
}

export interface CreateTableOptions {
  base: number;
  limit?: number;
}


export class CreateTable implements CreateTableUseCase {
  constructor(
    /* dependency injection */
  ) {}

  execute({ base, limit=10 }: CreateTableOptions) {
    let outputMessage: string = '';
    for (let i = 1; i <= limit; i++) {
      outputMessage += `\t ${base} x ${i} = ${base * i}\n`;
    }
    return outputMessage;
  }
}

