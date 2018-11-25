import React from 'react';
import './Projectlist.css';

const Singleproject = (props) => {

    
    return <div>
                <li><i class="fas fa-code-branch btndes"></i><span>{props.project}</span><a><i class="fas fa-minus-circle rembtn"></i></a></li>
            </div>
};
export default Singleproject;