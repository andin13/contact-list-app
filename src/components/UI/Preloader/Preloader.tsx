import React from 'react';
import { Spin } from 'antd';
import s from './Preloader.module.css';

function Preloader(): JSX.Element {
  return (
    <div className={s.preloader}>
      <Spin />
    </div>
  );
}

export default Preloader;
