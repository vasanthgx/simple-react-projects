
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
       if(errorMessage) return <h1>Erro ! {errorMessage}</h1>
       if(loading) return <h1>Loading... please wait</h1>
  return (
    <div >
     
      <div className="top-container">
         <h1>Scroll Indicator</h1>
          <div className='scroll-progress-container'>
            <div className="progress-bar" style={{width: `${scrollPercentage}%`}}>

            </div>

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
