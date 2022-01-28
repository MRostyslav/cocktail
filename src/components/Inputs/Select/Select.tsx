import React, { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';
import { Input } from '../index';

interface Iselect {
    selectList: string[],
    onSelect: (val: string) => void,
}

export default function Select(selectData: Iselect) {
    const [searchText, setSearchText] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [options, setOptions] = useState(selectData.selectList);

    const inputOnFocus = () => setShowOptions(true);
    const inputOnBlur = () => setShowOptions(false);
    const chooseOption = (item: string) => {
        setSearchText(item);
        selectData.onSelect(item);
    }

    useEffect(() => {
        setOptions(selectData.selectList);
    }, [selectData.selectList]);

    useEffect(() => {
        if (searchText.length) {
            setOptions(
                selectData.selectList.filter(option => {
                    // Filter results by doing case insensitive match on name here
                    return option.toLowerCase().includes(searchText.toLowerCase());
                })
            );
        }
        else setOptions(selectData.selectList);
    }, [searchText]);


    return (<div className={styles.select}>
        <Input value={searchText} onChange={(val: string) => setSearchText(val)}
            onFocus={() => inputOnFocus()}
            onBlur={() => inputOnBlur()}
        ></Input>

        {showOptions && <div className={styles.select__options}>
            {options.map(
                (item: string, index) =>
                    <div key={index}
                        className={styles.options__item}
                        onMouseDown={() => chooseOption(item)}>{item}</div>
            )}
        </div>}
    </div>);
}
