import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Author } from '../authors/authors.schema';
import mongoose from 'mongoose';

@Schema()
export class Book {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'authors' })
  author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
