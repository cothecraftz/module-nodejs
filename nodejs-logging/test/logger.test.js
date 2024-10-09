import winston from 'winston';

describe('logging', () => {
  it('create logger', () => {
    const logger = winston.createLogger({
      level: 'debug',
      transports: [new winston.transports.Console({})],
    });

    logger.info('Hello World.');
  });

  it('format logger', () => {
    const logger = winston.createLogger({
      level: 'debug',
      // format default JSON
      // format: winston.format.printf((info) => {
      //   return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
      // }),
      // format combine
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [new winston.transports.Console({})],
    });

    logger.info('Hello World.');
  });
  it('file transport logger', () => {
    const logger = winston.createLogger({
      level: 'debug',
      format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
      transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
          filename: 'transport.log',
        }),
      ],
    });

    logger.info('Hello World.');
  });
});
