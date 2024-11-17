import { Observable, of } from "rxjs";

export interface Product {
    id: string;
    price: number;
    title: string;
    image: string;
    description: string;
}

export interface DummyData {
    id: number;
    firstName: string;
}

export const dummyDataObs$: Observable<DummyData[]> = of(
    [...Array(10_000).keys()].map((index) => ({
        id: index,
        firstName: `firstName_${index}`,
    }))
);