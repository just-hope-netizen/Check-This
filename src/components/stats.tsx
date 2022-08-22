import { statsInt } from '../helpers/interface';
import styles from './stats.module.css';
import { useEffect, useRef } from 'react';


function Stats(props: statsInt) {
   const elRef = useRef<HTMLDivElement | null>(null);
   useEffect(() => {
     elRef.current?.scrollIntoView();
   }, []);
   
  return (
    <div className={styles.container} ref={elRef}>
      <h4 className={styles.h4}>Security experts summary</h4>
      <div className={styles.stats_wrapper}>
        <div className={styles.stat_container}>
          <h6 className={styles.harmless_style}>Clean</h6>
          <div className={styles.harmless_stat}>{props.harmless}</div>
        </div>
        <div className={styles.stat_container}>
          <h6 className={styles.malicious_style}>Malicious</h6>
          <div className={styles.malicious_stat}>{props.malicious}</div>
        </div>
        <div className={styles.stat_container}>
          <h6 className={styles.suspicious_style}>Suspicious</h6>
          <div className={styles.suspicious_stat}>{props.suspicious}</div>
        </div>
        <div className={styles.stat_container}>
          <h6 className={styles.unrated_style}>Unrated</h6>
          <div className={styles.unrated_stat}>{props.undetected}</div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
