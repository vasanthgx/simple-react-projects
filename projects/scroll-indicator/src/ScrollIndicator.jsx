
import { useEffect, useState } from 'react';
import  './scroll.css' ;
function ScrollIndicator({url}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [errorMessage, setErrorMessage] = useState('');

  async function fetchData(getUrl){
    try {
       setLoading(true);
       const response = await fetch(getUrl);
       const data = await response.json();
       setData(data);
       setLoading(false); 

       console.log(data);
      
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);

    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);
  return (
    <div >
     scroll
    </div>
  );
}

export default ScrollIndicator;
