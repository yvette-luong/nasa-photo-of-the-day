import React from 'react'; 

export default function Card (props) {
    const{photo} = props
    return (
        <div>
            <img src = {`${photo.url}`} alt = "sky full of start"/>
                <h1>{photo.date}</h1>
        </div>  
    )   
}