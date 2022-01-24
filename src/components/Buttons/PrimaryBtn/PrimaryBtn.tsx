import React from 'react';
import styles from './PrimaryBtn.module.scss'

interface IPrimary {
    text: string;
    action: () => void;
}

export default function PrimaryBtn({ text, action }: IPrimary) {
    return <button className={styles.button} onClick={action}>{text}</button>;
}