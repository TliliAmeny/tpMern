import { Body, Controller, Post } from '@nestjs/common';
import { AdressService } from 'src/models/services/AddressService';
import { Address } from '../Address';

@Controller()
export class AdressController {
  constructor(private adSer: AdressService) {}
  @Post()
  async creatAdress(@Body() adr: Address): Promise<Address> {
    try {
      return this.adSer.createAdress(adr);
    } catch (error) {
      throw error;
    }
  }
}
