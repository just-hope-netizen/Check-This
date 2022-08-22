import { jokeInt } from '../helpers/interface';
import styles from './joke.module.css';

function JokeComponent(props: jokeInt) {
  return (
    <>
      {props.data?.body.map((res) => (
        <div className={styles.backdrop} key={res._id}>
          <div className={styles.container}>
            <h3 className={styles.h3}>
              While our experts are analysing the url, here's a random joke!
            </h3>
            <h4 className={styles.h4}>
              {res.setup}
              ...&nbsp;
              {res.punchline}
            </h4>
          </div>
          <span className={styles.loader} />
        </div>
      ))}
    </>
  );
}

export default JokeComponent;
