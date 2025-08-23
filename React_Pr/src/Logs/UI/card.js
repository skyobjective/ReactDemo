import React from "react";
import './card.css';
const Card = (props) => {
    const class1 = `card ${props.className}`;
   // console.log('Card component rendered with props:', props.children);
    return (
        <div className={class1}>
            {props.children}
        </div>
    );
}

export default Card;