import React, { useState } from 'react';
import { Input } from '../../components/Inputs'

export default function Search() {
    const [serchValue, setSerchValue] = useState('');

    const searchByName = () => console.log(serchValue);

    return <div>
        <Input value={serchValue} onChange={(val: string): void => setSerchValue(val)} onSubmit={searchByName}></Input>

    </div>;
}
