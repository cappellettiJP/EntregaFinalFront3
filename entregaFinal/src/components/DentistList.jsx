import React, { useEffect, useState } from 'react';
import Cards from './Cards';

const DentistList = () => {
  const [dentists, setDentists] = useState([]);

  useEffect(() => {
    fetchDentists();
  }, []);

  const fetchDentists = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setDentists(data);
    } catch (error) {
      console.log('Error fetching dentists:', error);
    }
  };

  return (
    <div>
      <h1>Listado de Dentistas</h1>
      <div className="dentist-cards">
        {dentists.map((dentist) => (
          <Cards key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default DentistList;
