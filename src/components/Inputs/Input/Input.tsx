import React from 'react';
import styles from './Input.module.scss';

interface Iinput {
  value: string,
  onChange: (val: string) => void,
  onSubmit: () => void,
}

export default function Input(inputData: Iinput) {
  const onKeyDownEnter = (key: string) => inputData.value.length && key === 'Enter' ? inputData.onSubmit() : '';

  return <div className={styles.inputBlock}>
    <input value={inputData.value} onChange={(evt) => inputData.onChange(evt.currentTarget.value)} onKeyDown={(evt) => onKeyDownEnter(evt.key)} type="text" />
  </div>;
}
