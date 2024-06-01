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
            <input type="submit" value="Submit" />
        </form>
    );
};

export default SelectUser;
