import React from 'react';
import './Flashcard.css';

const flashcard = (data) => {
    return  <div class="row" >
                <div class="column">
                    <div class="card">
                    <span>{data.mainheading}</span><div class={data.color}></div>
                    <div class="container">
                    <hr/>
                    <p>{data.heading1}</p>
                    <h5>{data.uname}</h5>
                    <p>{data.heading2}</p>
                    <h5>{data.date}</h5>
                    </div>
                    </div>
                </div>
            </div> 
};

export default flashcard;