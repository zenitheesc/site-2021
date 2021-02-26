import React from 'react';
import Model from './Model';
import styles from 'styles/Projects.module.css';

export default function Software(props) {
  const { reportMaker } = props.textContent.projects;
  const { zenithMonitor } = props.textContent.projects;
  const { zenView } = props.textContent.projects;

  return (
    <section className={`-section ${styles.projectsSection}`} style={{backgroundColor: '#000000'}}>
      <Model textContent={ reportMaker } />
      <Model textContent={ zenithMonitor }/>
      <Model textContent={ zenView }/> 
    </section>
  );
}