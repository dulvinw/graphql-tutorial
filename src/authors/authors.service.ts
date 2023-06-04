import { Injectable } from '@nestjs/common';
import { AuthorDocument } from 'src/authors/authors.schema';
import { Model } from 'mongoose';
import { AuthorInput } from '../resources/graphql';

@Injectable()
export class AuthorsService {
  constructor(private authorModel: Model<AuthorDocument>) {}
  async createAuthor(input: AuthorInput) {
    const author = new this.authorModel({
      name: input.name,
      books: [],
    });
    return await author.save();
  }

  getAuthors() {
    return this.authorModel.find().lean();
  }

  getAuthor(id: string) {
    return this.authorModel.findById(id).lean();
  }
}
