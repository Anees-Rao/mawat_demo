import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Controller('country')
export class CountryController {
    constructor(private readonly countryService: CountryService) { }

    @Post('create')
    create(@Body() createCountryDto: CreateCountryDto) {
        return this.countryService.create(createCountryDto);
    }

    @Get('list')
    findAll() {
        return this.countryService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.countryService.findOne(+id);
    }
}