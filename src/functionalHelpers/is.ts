import { Predicate } from "./types";

export const is = <T>(a: T): Predicate<T> => b => b === a;
