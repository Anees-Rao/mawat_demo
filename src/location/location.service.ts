import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';

@Injectable()
export class LocationService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createLocationDto: CreateLocationDto) {
    try {
      const createLocation = await this.prisma.userLocation.create({
        data: createLocationDto,
      });
      return createLocation;
    } catch (error) {
      throw new Error(`Failed to create location: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const getLocationList = await this.prisma.userLocation.findMany();
      return getLocationList;
    } catch (error) {
      throw new Error(`Failed to get location list: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      const getLocation = await this.prisma.userLocation.findUnique({
        where: { id },
      });
      return getLocation;
    } catch (error) {
      throw new Error(`Failed to get location: ${error.message}`);
    }
  }

  async update(id: number, updateLocationDto: CreateLocationDto) {
    try {
      const updateLocation = await this.prisma.userLocation.update({
        where: { id },
        data: updateLocationDto,
      });
      return updateLocation;
    } catch (error) {
      throw new Error(`Failed to update location: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      const deleteLocation = await this.prisma.userLocation.delete({
        where: { id },
      });
      return deleteLocation;
    } catch (error) {
      throw new Error(`Failed to delete location: ${error.message}`);
    }
  }
}
