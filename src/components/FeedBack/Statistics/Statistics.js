import React from "react";
import styles from "./Statistics.module.css";

export default function Statistic({ statistics, total, positivePercentage }) {
  return (
    <ul>
      {statistics.map((stat) => (
        <li key={stat} className={styles.statisticItem}>
          {stat.join(" ")}
        </li>
      ))}
      <li key={total} className={styles.statisticItem}>
        Total: {total}
      </li>
      <li key={positivePercentage} className={styles.statisticItem}>
        Positive FeedBack: {positivePercentage}%
      </li>
    </ul>
  );
}
