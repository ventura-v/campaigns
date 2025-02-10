"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const typeorm_1 = require("@nestjs/typeorm");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.init();
    const dataSource = app.get((0, typeorm_1.getDataSourceToken)());
    await dataSource.synchronize(true);
    const campaignRepo = dataSource.getRepository('Campaign');
    await campaignRepo.insert([
        {
            id: '4925eefe-3a97-4b77-8e65-548c0418c2d5',
            name: 'Campanha 1',
            description: 'Descrição da campanha 1',
            imageUrl: 'Endereço da campanha 1',
            createdAt: new Date(),
            owner: '1',
        },
        {
            id: '8266f990-6e3b-4a23-89d2-6f98916ca156',
            name: 'Campanha 2',
            description: 'Descrição da campanha 2',
            imageUrl: 'Endereço da campanha 2',
            createdAt: new Date(),
            owner: '1',
        },
        {
            id: 'b8956aed-1a10-48cc-82c4-8d978176807f',
            name: 'Campanha 3',
            description: 'Descrição da campanha 3',
            imageUrl: 'Endereço da campanha 3',
            createdAt: new Date(),
            owner: '3',
        },
        {
            id: '233acf50-a6bd-42df-acaa-ea460457b300',
            name: 'Campanha 4',
            description: 'Descrição da campanha 4',
            imageUrl: 'Endereço da campanha 4',
            createdAt: new Date(),
            owner: '3',
        },
        {
            id: '3949bd9d-c23f-4421-8636-fca6e0ed2154',
            name: 'Campanha 5',
            description: 'Descrição da campanha 5',
            imageUrl: 'Endereço da campanha 5',
            createdAt: new Date(),
            owner: '5',
        },
    ]);
    await app.close();
}
bootstrap();
//# sourceMappingURL=fixtures.js.map