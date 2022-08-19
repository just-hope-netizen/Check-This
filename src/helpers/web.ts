import axios from 'axios';
import { jokeInt, scanInt, analysisInt } from './interface';

const proxyServer = 'https://check-this-proxy.herokuapp.com/';

export async function scanUrl(url: string): Promise<scanInt> {
  try {
        const options = {
          method: 'POST',
          url: `${proxyServer}scan`,
          headers: {
            Accept: 'application/json',
          },
          data: {
            url:url,
            key: process.env.REACT_APP_VIRUS_TOTAL_API_KEY
          }
        };

    const req = await axios.request(options);
    return req as scanInt;
  } catch (err) {
    return err as scanInt;
  }
}

export async function getUrlAnalysis(id: string): Promise<analysisInt> {
  try {
    const options = {
      method: 'POST',
      url: `${proxyServer}analysis`,
      headers: {
        Accept: 'application/json',
      },
      data: {
        id: id,
        key: process.env.REACT_APP_VIRUS_TOTAL_API_KEY,
      },
    };

    const req = await axios.request(options);
    return req as analysisInt;
  } catch (err) {
    return err as analysisInt;
  }
}

export async function getRandomJoke(): Promise<jokeInt> {
  try {
    const options = {
      method: 'GET',
      url: 'https://dad-jokes.p.rapidapi.com/random/joke',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY!,
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
      },
    };
    const req = await axios.request(options);
    return req as jokeInt;
  } catch (err) {
    return err as jokeInt;
  }
}
