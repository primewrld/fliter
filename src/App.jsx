import React, { useState } from 'react';
import mainFilter from './hooks/myfilter';

const App = () => {
    const arrData = [
        "Jombo Ebube", "Favour Amano", "Kingsley Onyecheta", "Mobi Ogbodo",
        "Diogo Njeze", "Tochkwu Ugochukwu", "Paschaline Duhu", "Ifeanyi Edeh",
        "Udeani Collins", "Chibuzo Ngwu", "Amarachi Duru", "senior Kc", "Deborah Aneke",
    ];
    const filterWords = ["Favour Amano", "Paschaline Duhu", "Diogo Njeze", "Amarachi Duru", "Deborah Aneke"];
    const filterMale = ["Jombo Ebube", "Kingsley Onyecheta", "Mobi Ogbodo", "Tochkwu Ugochukwu", "Ifeanyi Edeh"];
    
    const [isFiltered, setIsFiltered] = useState(false);
    const [isLoading, setIsLoading] = useState(false); 
    const { filteredData: data, loading } = mainFilter(arrData, isFiltered? filterWords : [], isLoading, isFiltered? filterMale : [], isLoading);

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
            <h2>Filter My Female Friends Below.</h2>
            <button onClick={handleFilter} disabled={isLoading}>Filter female</button>
            <button onClick={handleReset} disabled={isLoading}>Refresh Page</button>
            <button onClick={handleFilter} disabled={isLoading}>Filter male</button>
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