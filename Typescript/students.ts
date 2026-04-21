type House = "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";
const houses: House[] = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

type Student = {
    firstName: string;
    lastName: string;
    year: number;
    wand?: string;
    patronus: string;
    house: undefined | House;
};

type ErrorType = {
    message: string;
};

type ResponseType2 = Record<string, NonNullable<ErrorType>>;

const res: ResponseType2 = {
    status: undefined,
    sdfsd: {
        message: "Not found",
    },
};

const sortStudent = (student: Student) => {
    // 0-0.99 * 4
    const randIndex = Math.floor(Math.random() * 4);
    const selectedHouse = houses[randIndex];
    student.house = selectedHouse;
};

const student: Student = {
    firstName: "Harry",
    lastName: "Potter",
    year: 1,
    patronus: "lizard",
    house: undefined,
};
sortStudent(student);

console.log(student);

//
type Value = number | string | Record<string, string>;

const transformToArray = <T extends Value>(n: T): Array<T> => {
    return [n];
};

const x = transformToArray("sdfsdf");
const gx = transformToArray(6);
const ff = transformToArray({ karel: "vorel" });
