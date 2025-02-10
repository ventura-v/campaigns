"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignsService = void 0;
const common_1 = require("@nestjs/common");
const campaign_entity_1 = require("./entities/campaign.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let CampaignsService = class CampaignsService {
    constructor(campaingRepo) {
        this.campaingRepo = campaingRepo;
    }
    create(createCampaignDto) {
        const campaign = this.campaingRepo.create(createCampaignDto);
        return this.campaingRepo.save(campaign);
    }
    findAll() {
        return this.campaingRepo.find();
    }
    findOne(id) {
        return this.campaingRepo.findOne({
            where: { id },
        });
    }
    update(id, updateCampaignDto) {
        return this.campaingRepo.update({ id }, updateCampaignDto);
    }
    remove(id) {
        return this.campaingRepo.delete({ id });
    }
};
exports.CampaignsService = CampaignsService;
exports.CampaignsService = CampaignsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(campaign_entity_1.Campaign)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CampaignsService);
//# sourceMappingURL=campaigns.service.js.map