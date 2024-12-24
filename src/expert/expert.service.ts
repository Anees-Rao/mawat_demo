import { Injectable } from '@nestjs/common';
import { CreateExpertDto } from './dto/create-expert.dto';
import { UpdateExpertDto } from './dto/update-expert.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ExpertService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createExpertDto: CreateExpertDto) {
   try {
      const createExpert = await this.prisma.expert.create({
        data: createExpertDto,
      });
      return createExpert;
    } catch (error) {
      throw new Error(`Failed to create expert: ${error.message}`);
  }
}

  async findAll() {
    try {
      const getExpertList = await this.prisma.expert.findMany();
      return getExpertList;
    } catch (error) {
      throw new Error(`Failed to get expert list: ${error.message}`);
    }
  }

  findOne(id: number) {
    try {
      const getExpert = this.prisma.expert.findUnique({
        where: { id },
        
      })
      return getExpert;
    } catch (error) {
      throw new Error(`Failed to get expert: ${error.message}`);
    }
  }

  update(id: number, updateExpertDto: UpdateExpertDto) {
    try {
      const updateExpert = this.prisma.expert.update({
        where: { id },
        data: updateExpertDto,
      });
      return updateExpert;
    } catch (error) {
      throw new Error(`Failed to update expert: ${error.message}`);
    }
  }

  remove(id: number) {
    try {
      const deleteExpert = this.prisma.expert.delete({
        where: { id },
      });
      return deleteExpert;
    } catch (error) {
      throw new Error(`Failed to delete expert: ${error.message}`);
  }
}
}
