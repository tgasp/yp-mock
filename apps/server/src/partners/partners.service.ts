import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Partner } from './entities/partner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PartnersService {
  constructor(@InjectRepository(Partner) private partnerRepository: Repository<Partner>) { }

  create(createPartnerDto: CreatePartnerDto) {
    this.partnerRepository.save({ ...createPartnerDto});

    return 'This action adds a new partner';
  }

  findAll() {
    return this.partnerRepository.find();
  }

  findOne(id: string) {
    return this.partnerRepository.find({ where: { id } });
  }

  update(id: number, updatePartnerDto: UpdatePartnerDto) {
    return `This action updates a #${id} partner`;
  }

  remove(id: number) {
    return `This action removes a #${id} partner`;
  }
}
