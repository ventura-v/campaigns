import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
export declare class CampaignsController {
    private readonly campaignsService;
    constructor(campaignsService: CampaignsService);
    create(createCampaignDto: CreateCampaignDto): Promise<import("./entities/campaign.entity").Campaign>;
    findAll(): Promise<import("./entities/campaign.entity").Campaign[]>;
    findOne(id: string): Promise<import("./entities/campaign.entity").Campaign | null>;
    update(id: string, updateCampaignDto: UpdateCampaignDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
