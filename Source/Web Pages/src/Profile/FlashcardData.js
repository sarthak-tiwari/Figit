import React from 'react';
import './FlashcardData.css';

const flashcardData = (props) => {
    return  <div class="card">
                <span>{props.mainheading}</span><div class={props.color}></div>
                <hr/>
                <p>{props.heading1}</p>
                <h5>{props.value1}</h5>
                <p>{props.heading2}</p>
                <h5>{props.value2}</h5>
            </div>    
};

export default flashcardData;