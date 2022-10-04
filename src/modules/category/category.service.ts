import { Injectable } from '@nestjs/common';

import { Category } from '../../entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private categoryRepository: MongoRepository<Category>
    ) { }

    public async findAll(): Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    public async findById(categoryId): Promise<Category> {
        return await this.categoryRepository.findOne(categoryId);
    }

    public async createCategory(createCategoryDto): Promise<Category> {
        const { name, status } = createCategoryDto;
        const category = new Category();
        category.name = name;
        category.status = status;
        await this.categoryRepository.save(category);
        return category;
    }

    public async editCategory(categoryId, updateCategoryDto): Promise<Category> {
        const { name, status } = updateCategoryDto
        const category = await this.categoryRepository.findOne(categoryId);
        category.name = name;
        category.status = status;
        await this.categoryRepository.save(category);
        return category;
    }

    public async deleteCategory(categoryId): Promise<void> {
        const category = await this.categoryRepository.findOne(categoryId);
        await this.categoryRepository.remove(category)
    }
}