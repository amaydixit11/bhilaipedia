import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'amaydixit11',
    password: process.env.DB_PASSWORD || 'bhilaipedia',
    database: process.env.DB_NAME || 'bhilaipedia',
    synchronize: process.env.ENVIRONMENT === 'development' ? true : false,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    logging: true,
    migrations: [`${__dirname}/../infrastructure/database/migrations/*{.ts,.js}`],
    migrationsTableName: 'migrations',
});