import React from 'react';
import styles from 'styles/projects/HeroSectionV2.module.css';

export default function HeroSectionV2(props) {
  const backgroundImage = {
    backgroundImage: `${props.backgroundImage}`,
    backgroundColor: `${props.backgroundColor}`,
  };

  const { path } = props

  return (
    <div style={backgroundImage} className={styles.heroContainer}>
  
      <div className={styles.textContainer}>
        <h1>{props.title}</h1>
      </div>

    </div>
  );
}
