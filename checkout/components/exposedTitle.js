import React, { useEffect } from 'react';
import styles from './sample.module.css'
const ExportredTitle = () => {
  console.log('---------loading remote component---------');
  useEffect(() => {
    console.log('HOOKS WORKS');
  }, []);
  return (
    <div className="hero">
      <h1 className={"title " + styles.thing}>
         Fom [checkout Micro Frontend]
      </h1>
    </div>
  );
};

export default ExportredTitle;
