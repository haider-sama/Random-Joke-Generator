import { useEffect } from 'react';
import './App.css';

function Joke() {
    
    const limit = 3;
    const fetchData = async () => {
        try {
          const response = await fetch(`https://api.api-ninjas.com/v1/jokes?limit=${limit}`, {
            method: 'GET',
            headers: {
              'X-Api-Key': 'YOUR_API_KEY',
              'Content-Type': 'application/json',
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
  
      useEffect(() => {
        fetchData();
  }, []);
    
    return(
        <div className="container">
            <h1>Random Jokes</h1>
            <p className='quote-content'></p>
            <p className='author'></p>
            <div className='button-pos'><button onClick={fetchData}>New Joke</button></div>
        </div>
    );
}

export default Joke;