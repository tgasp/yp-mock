import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from './entities/partner.entity';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';

@Injectable()
export class PartnersService {
  constructor(@InjectRepository(Partner) private partnerRepository: Repository<Partner>) { }

  private generateClientId(): string {
    return randomBytes(16).toString('hex');
  }

  private generateApiKey(): string {
    return randomBytes(32).toString('hex');
  }

  async create(createPartnerDto: CreatePartnerDto) {
    const partner = this.partnerRepository.create({
      ...createPartnerDto,
      clientId: this.generateClientId(),
      apiKey: this.generateApiKey(),
    });

    await this.partnerRepository.save(partner);
    return partner;
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id: string) {
    return this.partnerRepository.findOne({ where: { id } });
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
