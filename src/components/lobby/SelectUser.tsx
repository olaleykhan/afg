import React, { FormEvent, useRef } from 'react';

type Props = {
    setPlayerID: (id: string) => void;
};

const SelectUser: React.FC<Props> = ({ setPlayerID }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputRef.current) {

            console.log(inputRef.current.value, " : inputRef.current.value");
            setPlayerID(inputRef.current.value);
        } else {
            setPlayerID("0");
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-md shadow-md w-full max-w-md mx-auto">
    <input ref={inputRef} type="text" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    <button type="submit" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Launch Game with id : {inputRef.current?.value??""}
    </button>
</form>

    );
};

export default SelectUser;
