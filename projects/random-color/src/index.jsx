import { useEffect, useState } from "react"

export default function RandomColor(){
    const [typeOfColor, setTypeOfColor] = useState("hex");
    const [color, setColor] = useState("#000000")

    function randomCodeGenerator(length){

        return  Math.floor(Math.random() * length);

    }

    function generateHexColor(){

        let hexColor ="#";
     
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        for(let i = 0; i < 6; i++)
            hexColor += hex[randomCodeGenerator(hex.length)];

        setColor(hexColor);
    }

    function generateRgbColor(){
        const r = randomCodeGenerator(256);
        const b = randomCodeGenerator(256);
        const g = randomCodeGenerator(256);

        

        setColor(`rgb(${r},${g},${b})`);
    }
     
    useEffect(()=>{
        if(typeOfColor === "rgb") generateRgbColor();
        else generateHexColor();

    },[typeOfColor]);

    return <div>
            <div style={{
                display: "flex",
                width:"100vw",
                height:"100vh",
                backgroundColor: color,
                justifyContent: "center",
                alignItems: "center",

            }}>

            <button onClick={()=>setTypeOfColor("hex")}>Random Hex color</button>
            <button onClick={()=>setTypeOfColor("rgb")}>Random RGB color</button>
            <button onClick={typeOfColor === 'hex' ? generateHexColor : generateRgbColor} >Generate Random color</button>
                     <div style={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems:"center",
                gap:"20px",
                color:{color},
                fontSize:"60px",
                marginTop:"20px",

            
            }}>
                <h3>{typeOfColor === "hex" ? "HEX Color : " : "RGB Color : "}</h3>
                <p>{color}</p>
            </div>
            </div>

            <div style={{
                display: "flex",
                flexDirection:"column",
                justifyContent: "center",
                alignItems:"center",
                gap:"20px",
                color:"white",
                fontSize:"60px",
                marginTop:"20px",

            
            }}>
                <h3>{typeOfColor === "hex" ? "HEX Color : " : "RGB Color : "}</h3>
                <p>{color}</p>
            </div>


    </div>
}
