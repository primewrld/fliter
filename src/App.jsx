import React, { useState } from 'react';
import mainFilter from './hooks/myfilter';

const App = () => {
    const arrData = [
        "Enugu State", "Adamawa State", "Kano State", "Imo State",
        "Ebonyi State", "Abia State", "Rivers State", "Anambra State",
        "Platue State", "Lagos State", "Ogun State", "Delta State", "Edo State",
        "Jigawa State", "Taraba State", "Ondo State", "Kastina State", "Sokoto State",
    ];
    const filterWords = ["Anambra State", "Abia State", "Ebonyi State", "Enugu State", "Imo State"];

    const [isFiltered, setIsFiltered] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const { filteredData: data, loading } = mainFilter(arrData, isFiltered? filterWords : [], isLoading);

    const handleFilter = () => {
        setIsLoading(true); 
        setTimeout(() => {
            setIsFiltered(true);
            setIsLoading(false); 
        }, 2000); 
    };

    const handleReset = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsFiltered(false);
            setIsLoading(false); 
        }, 2000); 
    };

    return (
        <div>
            <h2>Filter Out SouthEast States From The List Of States Below.</h2>
            <button onClick={handleFilter} disabled={isLoading}>Filter States</button>
            <button onClick={handleReset} disabled={isLoading}>Refresh Page</button>
            {!loading &&!isLoading? (
                <>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>{isLoading? 'Processing......' : 'Loading...'}</p>
                
            )}
        </div>
    );
};

export default App;