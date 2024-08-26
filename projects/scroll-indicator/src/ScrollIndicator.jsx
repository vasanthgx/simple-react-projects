
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
       

       if(data && data.products && data.products.length){
        setData(data.products);
        setLoading(false);
       }
      
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);

    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  
       console.log(data,loading);
  return (
    <div >
      <h1>Scroll Indicator</h1>
      <div className="data-container">
        {
           data && data.length ? 
            data.map( (item)=> <p>{item.title}</p>)
           : null
        }
      </div>
    </div>
  );
}

export default ScrollIndicator;
