/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface BookInput {
  title: string;
  author: string;
  category: string;
}

export interface AuthorInput {
  name: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
}

export interface Author {
  id: string;
  name: string;
  books?: Nullable<Book[]>;
}

export interface IQuery {
  books(): Book[] | Promise<Book[]>;
  book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
  authors(): Nullable<Author[]> | Promise<Nullable<Author[]>>;
  author(id: string): Nullable<Author> | Promise<Nullable<Author>>;
}

export interface IMutation {
  addBook(input: BookInput): Book | Promise<Book>;
  updateBook(id: string, input: BookInput): Book | Promise<Book>;
  deleteBook(id: string): string | Promise<string>;
  addAuthor(input: AuthorInput): Author | Promise<Author>;
}

type Nullable<T> = T | null;
