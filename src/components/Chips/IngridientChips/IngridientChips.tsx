import React from 'react';
import styles from '../Chips.module.scss';

export default function IngridientChips({ title }: { title: string }) {
    return <div className={styles.chips}>{title}</div>;
}
