import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ExpertModule } from './expert/expert.module';

@Module({
  imports: [UserModule, ExpertModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
