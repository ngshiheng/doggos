import { RESTDataSource } from 'apollo-datasource-rest';
import { DATA_SOURCE_URL } from '../utils/consts';

export interface IDogAPI {
    dogAPI: DogAPI;
}

export interface IDataSources {
    dataSources: IDogAPI;
}

export class DogAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = DATA_SOURCE_URL;
    }

    async getListAllBreeds() {
        return await this.get(`/breeds/list/all`);
    }

    async getRandomImage() {
        return await this.get(`/breeds/image/random`);
    }

    async getByBreed() {
        return await this.get(`/breed/hound/images`);
    }

    async getBySubBreed() {
        return await this.get(`/breed/hound/list`);
    }

    async getBreed(type: string) {
        return await this.get(`/breed/${type}/images/random`);
    }
}
