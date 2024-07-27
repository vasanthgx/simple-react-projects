import { useEffect, useState } from "react"
import './styles.css'

export default function LoadMoreData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    async function fetchImages(){

        try {
            setLoading(true);
            const apiResponse = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ?0: count * 20}`);
            const data = await apiResponse.json();
            if(data && data.products && data.products.length){
                setProducts((prevData)=> [...prevData, ...data.products]);
                setLoading(false);
            }


            console.log(data)
            
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }

    }


    useEffect(()=>{

            fetchImages()
    },[count]);
    

    useEffect(()=>{
        if(products && products.length === 100) setDisableButton(true);

    },[products]);


    if(loading) {
        return <div>Loading in process... please wait</div>

    }

    return (
        <div className="initial-container">
         <div className="image-container">
            {
                products && products.length ? 
                products.map((item,index)=>(
                    <div className="product" key={index}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}

                        />
                        <p>{item.title}</p>
                    </div>
                ))
                : null

            }
         </div>
         <div className="button-container">
            <button disabled= {disableButton} onClick={()=>setCount(count + 1)}>Load more data</button>
            {disableButton ? <p>You have reached to 100 products</p> : null}
         </div>
        
        </div>
    )
}