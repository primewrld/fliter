
import { useState, useEffect } from 'react';

const mainFilter = (arrData, filterWords) => {
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterArray = () => {
      if (filterWords.length === 0) {
        setFilteredData(arrData);
      } else {
        const filtered = arrData.filter(item =>
          filterWords.some(word => item.includes(word))
        );
        setFilteredData(filtered);
      }
      setLoading(false);
    };
    filterArray();
  }, [arrData, filterWords]);

  return { filteredData, loading };
};

export default mainFilter;