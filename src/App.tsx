import React, {ChangeEvent, useState} from "react";
import Caesar from "./Caesar";



const App = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [isInputValid, setIsInputValid] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(3);
    const Cipher = new Caesar();


    const handleNumberChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedNumber(parseInt(event.target.value));
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleConfirmClick = () => {
        setIsInputValid(true);
        setOutputText(Cipher.CaesarCipher(inputText, selectedNumber));
    };
    const handleResetClick = () => {
        setIsInputValid(false);
    }

    return (
        <div className="mb-4">
            {!isInputValid ? (
                <div className='border px-2 py-4 rounded flex-col items-center mb-2'>
                    <h1> The Caesar Cipher </h1>
                    <input type="text" value={inputText} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                           onChange={handleInputChange} placeholder='Enter the text you want to encrypt'/>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                            onClick={handleConfirmClick}>Subject</button>
                    <div className='border px-2 py-4 rounded flex-col items-center mb-2'>
                        <label htmlFor="number-select">Choose a number:</label>
                        <select id="number-select"
                                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 py-2 px-4 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
                                value={selectedNumber}
                                onChange={handleNumberChange}>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
            ) : (
                <div className='border px-2 py-4 rounded flex-col items-center mb-2'>

                    <p className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                        Introduced text: {inputText}</p>
                    <p className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                        Encrypted text: {outputText}</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                         onClick={handleResetClick}>Reset</button>
                </div>
            )}
        </div>
    );
};


export default App;
