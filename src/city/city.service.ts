import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCityDto } from './dto/create-city.dto';

@Injectable()
export class CityService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createCityDto: CreateCityDto) {
        try {
            return await this.prisma.city.create({
                data: createCityDto,
            });
        } catch (error) {
            throw new Error(`Failed to create city: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await this.prisma.city.findMany();
        } catch (error) {
            throw new Error(`Failed to get cities: ${error.message}`);
        }
    }

    async findOne(id: number) {
        try {
            return await this.prisma.city.findUnique({
                where: { id },
            });
        } catch (error) {
            throw new Error(`Failed to get city: ${error.message}`);
        }
    }
} 