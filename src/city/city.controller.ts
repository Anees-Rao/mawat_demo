import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) { }

    @Post('create')
    create(@Body() createCityDto: CreateCityDto) {
        return this.cityService.create(createCityDto);
    }

    @Get('list')
    findAll() {
        return this.cityService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cityService.findOne(+id);
    }
}