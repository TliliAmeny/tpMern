/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MysqlConfig } from './config/config';
import { Entities } from './models/entities';
import { AdressController } from './models/entities/controller/AdressController';
import { AdressRpository } from './models/repositories/AdressRepository';
import { AdressService } from './models/services/AddressService';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...MysqlConfig,
      entities: Entities,
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, AdressController],
  providers: [AppService, AdressRpository, AdressService],
})
export class AppModule {}
