import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateCountryDto } from './dto/create-country.dto';

@Injectable()
export class CountryService {
    constructor(private readonly prisma: PrismaService) { }

    async create(createCountryDto: CreateCountryDto) {
        try {
            return await this.prisma.country.create({
                data: createCountryDto,
            });
        } catch (error) {
            throw new Error(`Failed to create country: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await this.prisma.country.findMany();
        } catch (error) {
            throw new Error(`Failed to get countries: ${error.message}`);
        }
    }

    async findOne(id: number) {
        try {
            return await this.prisma.country.findUnique({
                where: { id },
            });
        } catch (error) {
            throw new Error(`Failed to get country: ${error.message}`);
        }
    }
} 