import { ApolloError } from 'apollo-server';
import { IDataSources } from '../datasources/dogAPI';

const listAllBreeds = async (_source, _args, { dataSources }) => {
    try {
        const breedList: string[] = [];
        const data = await dataSources.dogAPI.getListAllBreeds();

        for (const breed in data.message) {
            breedList.push(breed);
        }
        return breedList;
    } catch (error) {
        throw new ApolloError(error);
    }
};

const randomImage = (_source, _args, { dataSources }: IDataSources) => {
    try {
        return dataSources.dogAPI.getRandomImage();
    } catch (error) {
        throw new ApolloError(error);
    }
};

const byBreed = (_source, _args, { dataSources }: IDataSources) => {
    try {
        return dataSources.dogAPI.getByBreed();
    } catch (error) {
        throw new ApolloError(error);
    }
};

const bySubBreed = (_source, _args, { dataSources }: IDataSources) => {
    try {
        return dataSources.dogAPI.getBySubBreed();
    } catch (error) {
        throw new ApolloError(error);
    }
};

const breed = (_source, { type }, { dataSources }: IDataSources) => {
    try {
        return dataSources.dogAPI.getBreed(type);
    } catch (error) {
        throw new ApolloError(error);
    }
};

export const resolvers = {
    Query: {
        listAllBreeds,
        randomImage,
        byBreed,
        bySubBreed,
        breed,
    },
};
