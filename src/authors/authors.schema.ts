import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Book } from '../books/books.schema';
import mongoose from 'mongoose';

export type AuthorDocument = Author & Document;
@Schema()
export class Author {
  @Prop()
  id: string;

  name: string;

  @Prop({ type: [{ type: [mongoose.Schema.Types.ObjectId], ref: 'books' }] })
  books: Book[];
}
export const AuthorSchema = SchemaFactory.createForClass(Author);
