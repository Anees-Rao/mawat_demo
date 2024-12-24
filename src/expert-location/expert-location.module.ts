import { Module } from '@nestjs/common';
import { ExpertLocationService } from './expert-location.service';
import { ExpertLocationController } from './expert-location.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ExpertLocationController],
  providers: [ExpertLocationService],
})
export class ExpertLocationModule {}
