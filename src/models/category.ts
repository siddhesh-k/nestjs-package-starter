import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CategoryDocument = Category & Document;

@Schema({timestamps:true})
export class Category {
    @Prop({
        type:String,
        required:true,
        unique:true
    })
    name:string;

    @Prop({
        type:Boolean,
        default:false
    })
    status:boolean;
}

export const CategorySchema = SchemaFactory.createForClass(Category);