import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpertLocationService } from './expert-location.service';
import { CreateExpertLocationDto } from './dto/create-expert-location.dto';
import { UpdateExpertLocationDto } from './dto/update-expert-location.dto';

@Controller('expert-location')
export class ExpertLocationController {
  constructor(private readonly expertLocationService: ExpertLocationService) {}

  @Post('create')
  create(@Body() createExpertLocationDto: CreateExpertLocationDto) {
    return this.expertLocationService.create(createExpertLocationDto);
  }

  @Get()
  findAll() {
    return this.expertLocationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expertLocationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpertLocationDto: UpdateExpertLocationDto) {
    return this.expertLocationService.update(+id, updateExpertLocationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expertLocationService.remove(+id);
  }
}
