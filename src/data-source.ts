import { ConfigService } from "@nestjs/config";
import { join } from "path"
import "reflect-metadata"
import { DataSource } from "typeorm"
require('dotenv').config();

const configService = new ConfigService(process.env);

export const AppDataSource = new DataSource({
    type: "mongodb",
    host: configService.get('MONGODB_HOST'),
    port: parseInt(configService.get('MONGODB_PORT')),
    database: configService.get('MONGODB_DATABASE'),
    synchronize: false,
    logging: false,
    entities: [join(__dirname, '..', 'src/entity/*.entity.ts')],
    subscribers: [],
})
