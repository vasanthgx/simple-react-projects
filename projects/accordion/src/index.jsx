import data from "./data"
import {useState} from  "react"
import "./style.css"

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [multipleSelectionButton, setMultipleSelectionButton] = useState(false);
    const [multipleQuestionsSelected, setMultipleQuestionsSelected] = useState([]);


    function handleClick(id){
        // console.log(id);
        setSelected(id === selected ? null: id);
    }
    // console.log(selected);

    function handleMultipleSelectionButtonClick(){
        setMultipleSelectionButton(!multipleSelectionButton);
    }

    function handleMultipleSelectionClick(id){
        let copyMultipleState =[...multipleQuestionsSelected];
        const findIndexOfId = copyMultipleState.indexOf(id);
        if(findIndexOfId === -1) copyMultipleState.push(id);
        else copyMultipleState.splice(findIndexOfId, 1)

        setMultipleQuestionsSelected(copyMultipleState)

        console.log(selected , multipleQuestionsSelected);
    }

    return(
       
           <div className="acc-wrapper">
            <button onClick={ handleMultipleSelectionButtonClick}>Enable Multi Selection</button>

            <div className="accordion">
                {
                    data && data.length > 0  ? 
                    
                    data.map((dataItem)=>(
                        <div key={dataItem.id} className="item">
                        
                    <div onClick={multipleSelectionButton ?()=>handleMultipleSelectionClick(dataItem.id) :()=>handleClick(dataItem.id)} className="title">
                            <h3>{dataItem.question}</h3>

                            <span>+</span>

                        </div>

                                {/* {
                                    multipleSelectionButton ? multipleQuestionsSelected.indexOf(dataItem.id) !== -1 &&(
                                            <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    ): selected === dataItem.id &&(
                                        <div className="content">
                                        {dataItem.answer}
                                    </div>
                                    )
                                } */}

                            {

                                selected === dataItem.id || multipleQuestionsSelected.indexOf(dataItem.id) !== -1 ? 
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                : null
                            }
                        </div>
                    ))
                    
                    : <div></div>                   
                }

            </div>
        </div>
                
                
                
           
            

        
        
    )
    
}