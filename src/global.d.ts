import { StringSchema } from "yup";

//the purpose of this file is to be able to use custom validation of field in our project like in CreateGenre file line 23
declare module 'yup'{
    class StringSchema{
        firstLetterUpperCase(): this;
    }
}