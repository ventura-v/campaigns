import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign) private campaingRepo: Repository<Campaign>,
  ) {}

  create(createCampaignDto: CreateCampaignDto) {
    const campaign = this.campaingRepo.create(createCampaignDto);
    return this.campaingRepo.save(campaign);
  }

  findAll() {
    return this.campaingRepo.find();
  }

  findOne(id: string) {
    return this.campaingRepo.findOne({
      where: { id },
    });
  }

  update(id: string, updateCampaignDto: UpdateCampaignDto) {
    return this.campaingRepo.update({ id }, updateCampaignDto);
  }

  remove(id: string) {
    return this.campaingRepo.delete({ id });
  }
}
