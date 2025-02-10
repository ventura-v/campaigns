import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { Campaign } from './entities/campaign.entity';
import { Repository } from 'typeorm';
export declare class CampaignsService {
    private campaingRepo;
    constructor(campaingRepo: Repository<Campaign>);
    create(createCampaignDto: CreateCampaignDto): Promise<Campaign>;
    findAll(): Promise<Campaign[]>;
    findOne(id: string): Promise<Campaign | null>;
    update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
