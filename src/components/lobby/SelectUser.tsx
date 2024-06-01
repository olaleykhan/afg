import React, { FormEvent, useRef } from 'react';

type Props = {
    setPlayerID: (id: string) => void;
};

const SelectUser: React.FC<Props> = ({ setPlayerID }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {
            setPlayerID(inputRef.current.value);
        } else {
            setPlayerID("0");
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" />
            <button type="submit"> Launch Game with id : {inputRef.current?.value??""}</button>
        </form>
    );
};

export default SelectUser;
