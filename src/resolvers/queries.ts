import fetch from 'node-fetch';

const BASE_URL = 'https://dog.ceo/api';

const listAllBreeds = async () => {
    let breedList: string[] = [];
    const res = await fetch(`${BASE_URL}/breeds/list/all`);
    const data = await res.json();
    if (data.message) {
        for (const breed in data.message) {
            breedList.push(breed);
        }
    }
    return breedList;
};

const randomImage = () =>
    fetch(`${BASE_URL}/breeds/image/random`).then((res) => res.json());

const byBreed = () =>
    fetch(`${BASE_URL}/breed/hound/images`).then((res) => res.json());

const bySubBreed = () =>
    fetch(`${BASE_URL}/breed/hound/list`).then((res) => res.json());

const breed = (parent: any, arg: any) =>
    fetch(`${BASE_URL}/breed/${arg.type}/images/random`).then((res) =>
        res.json(),
    );

export const resolvers = {
    Query: {
        listAllBreeds,
        randomImage,
        byBreed,
        bySubBreed,
        breed,
    },
};
