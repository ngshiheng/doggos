export const DATA_SOURCE_URL = 'https://dog.ceo/api';

export const DEFAULT_QUERY_LIST_ALL_BREEDS = `
query {
    listAllBreeds
  }
`;

export const DEFAULT_QUERY_RANDOM_IMAGE = `
query {
    randomImage {
      message
      status
    }
  }
`;

export const DEFAULT_QUERY_BY_BREED = `
query {
    byBreed {
      message
      status
    }
  }  
`;

export const DEFAULT_QUERY_BY_SUB_BREED = `
query {
    bySubBreed {
      message
      status
    }
  }  
`;

export const DEFAULT_QUERY_BY_SPECIFIC_BREED = `
query {
    breed(type: "poodle") {
      message
      status
    }
  }
`;
