import { CleanIcon, MaliciousIcon, UnratedIcon } from '../assets/svg';
import { resultInt } from '../helpers/interface';
import styles from './result.module.css';

function Results(props: resultInt) {
  return (
    <div className={styles.main}>
      <h4 className={styles.h4}>Security experts analysis</h4>
      <div className={styles.container}>
        <div className={styles.result_wrapper}>
          {Object.values(props)
            .filter((value) => value.category === 'malicious')
            .map((value) => (
              <div key={value.engine_name} className={styles.result}>
                <div className={styles.content}>

                <span >
                  {value.engine_name}
                </span>
                <span className={styles.malicious_content}>
                  <MaliciousIcon />
                  {value.result}
                </span>
                </div>
              </div>
            ))}
          {Object.values(props)
            .filter((value) => value.category === 'suspicious')
            .map((value) => (
              <div key={value.engine_name} className={styles.result}>
                <div className={styles.content}>

                <span >
                  {value.engine_name}
                </span>
                <span className={styles.suspicious_content}>
                  <MaliciousIcon />
                  {value.result}
                </span>
              </div>
              </div>
            ))}
          {Object.values(props)
            .filter((value) => value.category === 'harmless')
            .map((value) => (
              <div key={value.engine_name} className={styles.result}>
                <div className={styles.content}>

                <span >
                  {value.engine_name}
                </span>
                <span className={styles.harmless_content}>
                  <CleanIcon />
                  {value.result}
                </span>
              </div>
              </div>
            ))}
          {Object.values(props)
            .filter((value) => value.category === 'undetected')
            .map((value) => (
              <div key={value.engine_name} className={styles.result}>
                <div className={styles.content}>

                <span >
                  {value.engine_name}
                </span>
                <span className={styles.unrated_content}>
                  <UnratedIcon />
                  {value.result}
                </span>
              </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Results;
