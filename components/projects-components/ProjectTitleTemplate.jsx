import React from 'react';
import styles from 'styles/projects/ProjectTitleTemplate.module.css';

const titleProps = {
  style: { position: 'relative', minHeight: '1000vh' },
  backgroundColor: "#000000",
  title: "GARATÉA-I",
  subtitle: "PRIMEIRA SONDA",
  path: "SondasAeroespaciais/Garatéa-I/photo8.webp"
};

export default function ProjectTitleTemplate(props) {
  const backgroundImage = {
    backgroundImage: `${titleProps.backgroundImage}`,
    backgroundColor: `${titleProps.backgroundColor}`,
  };

  const { path } = titleProps;

  return (
    <div style={backgroundImage} className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>{titleProps.title}</h1>
        <h2>{titleProps.subtitle}</h2>
      </div>
      <div className={styles.imgContainer}>
        <img alt={"Default Image"} src={`/images/Projetos/${path}`} />
      </div>
    </div>
  );
}
