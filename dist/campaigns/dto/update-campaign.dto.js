"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCampaignDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_campaign_dto_1 = require("./create-campaign.dto");
class UpdateCampaignDto extends (0, mapped_types_1.PartialType)(create_campaign_dto_1.CreateCampaignDto) {
}
exports.UpdateCampaignDto = UpdateCampaignDto;
//# sourceMappingURL=update-campaign.dto.js.map