import { Category } from '../entity/category.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';


export { Category } from '../entity/category.entity';

@Injectable()
export class CategoryRepository extends MongoRepository<Category> {

    public async findAll(): Promise<Category[]> {
        return await this.findAll();
    }

    public async findById(categoryId): Promise<Category> {
        return await this.findOne(categoryId);
    }

    public async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { name, status } = createCategoryDto;
        const category = new Category();
        category.name = name;
        category.status = status;
        await this.save(category);
        return category;
    }

    public async editCategory(categoryId, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const { name, status } = updateCategoryDto
        const category = await this.findOne(categoryId);
        category.name = name;
        category.status = status;
        await this.save(category);
        return category;
    }

    public async deleteCategory(categoryId): Promise<void> {
        const category = await this.findOne(categoryId);
        await this.remove(category)
    }
}