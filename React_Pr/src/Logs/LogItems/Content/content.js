import React from "react";
import './content.css';
const Content = (props) => {
    return (
        <div className="content">
            <div className="desc">{props.desc}</div>
            <div className="time">{props.time}分钟</div>
        </div>
    );
}
export default Content;