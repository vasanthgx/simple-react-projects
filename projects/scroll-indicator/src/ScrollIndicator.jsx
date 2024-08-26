
import { useEffect, useState } from 'react';
import  './scroll.css' ;
function ScrollIndicator({url}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);  
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

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

  function handleScrollPercentage(){
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    )
    const scroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage( (scroll/height)*100 )

  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScrollPercentage);

    window.removeEventListener('scroll', ()=>{})
  },[])

  
       console.log(data,scrollPercentage);
  return (
    <div >
      <h1>Scroll Indicator</h1>
      <div className='scroll-progress-container'>
        <div className="progress-bar">
          
        </div>

      </div>
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
