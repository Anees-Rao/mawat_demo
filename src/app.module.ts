import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ExpertModule } from './expert/expert.module';
import { LocationModule } from './location/location.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { LanguageModule } from './language/language.module';
import { ExpertLocationModule } from './expert-location/expert-location.module';

@Module({
  imports: [UserModule, ExpertModule, LocationModule, CityModule, CountryModule, LanguageModule, ExpertLocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
