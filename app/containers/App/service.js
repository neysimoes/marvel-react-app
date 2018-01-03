import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/'
});

export const getCharacters = () => api.get(`characters`);
export const getCharacter = (id) => api.get(`character\${id}`);

export default {
  api,
  getCharacters,
  getCharacter
};
