import { Injectable } from '@nestjs/common';
import { CreateExpertLocationDto } from './dto/create-expert-location.dto';
import { UpdateExpertLocationDto } from './dto/update-expert-location.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ExpertLocationService {
   constructor(private readonly prisma: PrismaService) { }

  async create(createExpertLocationDto: CreateExpertLocationDto) {
    try {
      const createLocation = await this.prisma.expertLocation.create({
        data: createExpertLocationDto,
      });
      return createLocation;
    } catch (error) {
      throw new Error(`Failed to create location: ${error.message}`);
    }
  }

  findAll() {
    try {
      const getLocationList = this.prisma.expertLocation.findMany();
      return getLocationList;
    } catch (error) {
      throw new Error(`Failed to get location list: ${error.message}`);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} expertLocation`;
  }

  update(id: number, updateExpertLocationDto: UpdateExpertLocationDto) {
    return `This action updates a #${id} expertLocation`;
  }

  remove(id: number) {
    return `This action removes a #${id} expertLocation`;
  }
}
