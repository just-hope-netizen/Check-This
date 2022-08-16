import axios from 'axios';
import { jokeInt, scanInt, analysisInt } from './interface'


export async function scanUrl(url: string): Promise<scanInt> {
  try {
    const encodedParams = new URLSearchParams();
    encodedParams.set('url', url);

    const options = {
      method: 'POST',
      url: 'https://www.virustotal.com/api/v3/urls',
      headers: {
        Accept: 'application/json',
        'x-apikey': process.env.REACT_APP_VIRUS_TOTAL_API_KEY!,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: encodedParams,
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
      method: 'GET',
      url: `https://www.virustotal.com/api/v3/analyses/${id}`,
      headers: {
        Accept: 'application/json',
        'x-apikey': process.env.REACT_APP_VIRUS_TOTAL_API_KEY!,
      },
    };

    const req = await axios.request(options);
    return req as analysisInt;
  } catch (err) {
    return err as analysisInt;
  }
}

 


export async function getRandomJoke() :Promise<jokeInt>{
  try{
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
    return err as jokeInt
  }
 
}