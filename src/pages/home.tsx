import React, { useState } from 'react';
import { LogoIcon } from '../assets/svg';
import JokeComponent from '../components/joke-component';
import Results from '../components/result';
import Stats from '../components/stats';
import { jokeInt, resultInt, statsInt } from '../helpers/interface';

import { getRandomJoke, getUrlAnalysis, scanUrl } from '../helpers/web';
import styles from './home.module.css';

function Home() {
  const [showSpinner, setShowSpinner] = useState<boolean>();
  const [url, setUrl] = useState<string>('');
  const [result, setResult] = useState<resultInt>({});
  const [stats, setStats] = useState<statsInt>({});
  const [jokeRes, setJokeRes] = useState<jokeInt>({});
  const [resUrl, setResUrl] = useState<string>('');

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setShowSpinner(true);
    scanUrl(url).then((res) => {
      if (res.data.code) {
        alert(res.data.code);
        setShowSpinner(false);
      } else {
        const urlId = res.data.data.id;
        getUrlAnalysis(urlId).then((res) => {
          if (res.data.data.attributes.status === 'completed') {
            setResUrl(res.data.meta.url_info.url);
            setResult(res.data.data.attributes.results);
            setStats(res.data.data.attributes.stats);
            setShowSpinner(false);
    
    
    
  } else {
    //if respond status is 'queue'
    //make another request to the api for the result after 20seconds
    // in the mean time make request to random joke api
    setTimeout(() => {
      getUrlAnalysis(urlId).then((res) => {
                setResult(res.data.data.attributes.results);
                setStats(res.data.data.attributes.stats);
                setResUrl(res.data.meta.url_info.url);
                setShowSpinner(false);

              });
            }, 20000);

            getRandomJoke().then((res) => {
              setJokeRes(res);
            });
          }
        });
      }
    });
  }



  return (
    <main className={styles.main_container}>
      <header className={styles.header}>
        <span className={styles.logo_container}>
          <LogoIcon className={styles.logo} />
          Check-This
        </span>
      </header>

      <section className={styles.section}>
        <article>
          <h4 className={styles.heading}>
            Get That Url Analysis Report Before Visiting It.
          </h4>
          <p className={styles.heading_p}>
            See what top malware and cybersecurity experts are saying about the
            url.
          </p>
        </article>
        <form className={styles.form} onSubmit={submitHandler}>
          <input
            type='url'
            name='url'
            id='url'
            placeholder='Enter website or Url here'
            required={true}
            className={styles.input}
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
          <button className={styles.button}>
            {showSpinner ? <span className={styles.spinner} /> : 'Check'}
          </button>
        </form>
      </section>
      {Object.keys(result).length > 0 ? (
        <div>
          <Stats {...stats} />
          <h4 className={styles.h4}>
            Security experts analysis for:
            <span className={styles.h4_child}>&nbsp;{resUrl}</span>
          </h4>
          <Results {...result} />
        </div>
      ) : (
        <JokeComponent {...jokeRes} />
      )}
    </main>
  );
}

export default Home;
