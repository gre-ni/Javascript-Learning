const bookTitle: string = "Stopařův průvodce po galaxii";
const pageCount: number = 256;
const isAvailable: boolean = true;
const authorNote: undefined = undefined;

type BookGenre = "romance" | "thriller" | "sci-fi" | "classic";
const genre: BookGenre = "sci-fi";

type Id = string | number;
const bookId: Id = "776-222";
const bookId2: Id = 67;

type Book = {
    authors: string[];
    pageCount: number;
    id: string | number;
    genre: BookGenre;
    authorNote?: string | undefined;
};

const book: Book = {
    authors: ["Jane Austen"],
    pageCount: 230,
    id: 88,
    genre: "classic",
    authorNote: undefined,
};

type Library = Array<Book>;

const library2: Book[] = [book];
