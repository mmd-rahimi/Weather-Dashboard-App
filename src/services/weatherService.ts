import axios from 'axios';
import { weatherConfig } from '../config/weatherConfig';

const { apiKey, baseUrl } = weatherConfig;

export const weatherService = {
  getWeatherByCity: async (city: string) => {
    const response = await axios.get(`${baseUrl}/weather`, {
      params: {
        q: city,
        appid: apiKey,
        units: 'metric',
        lang: 'en'
      }
    });
    
    return response.data;
  }
};