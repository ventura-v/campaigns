import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CampaignsModule } from './campaigns/campaigns.module';
import { Campaign } from './campaigns/entities/campaign.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'local_user',
      password: 'local_password',
      database: 'local_db',
      entities: [Campaign, User],
      // autoLoadEntities: true,
      synchronize: true,
    }),
    CampaignsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
