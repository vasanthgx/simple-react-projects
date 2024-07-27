import { useEffect, useState } from "react"


export default function LoadMoreData(){
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchImages(){

        try {
            setLoading(true);
            const apiResponse = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ?0: count * 20}`);
            const data = await apiResponse.json();
            if(data && data.products && data.products.length){
                setProducts((prevData)=> [...prevData, ...data.products]);
            }

            setLoading(false);

            console.log(data)
            
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }

    }


    useEffect(()=>{

            fetchImages()
    },[count]);
    
    if(loading) {
        return <div>Loading in process... please wait</div>

    }

    return (
        <div className="initial-container">
         <div className="image-container">
            {
                products && products.length ? 
                products.map(item=>(
                    <div className="product">
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
            <button>Load more data</button>
         </div>
        
        </div>
    )
}