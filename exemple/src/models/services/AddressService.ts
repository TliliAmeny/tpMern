/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { AdressRpository } from '../repositories/AdressRepository';
import { Address } from '../entities/Address';
import { Injector } from '@nestjs/core/injector/injector';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdressService {
  constructor(private adressRepository: AdressRpository) {}

  async createAdress(adress: Address): Promise<Address> {
    try {
      return this.adressRepository.create(adress);
    } catch (error) {
      throw error;
    }
  }

  async getAllAdress(): Promise<Array<Address>> {
    try {
      return this.adressRepository.getAllAdress();
    } catch (error) {
      throw error;
    }
  }
}
