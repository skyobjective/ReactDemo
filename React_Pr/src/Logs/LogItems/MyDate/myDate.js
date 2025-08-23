import React from "react";
import './myDate.css';
 const MyDate = ({ month, day }) => {
    return (
        <div className="data">
            <div className="month">{month}月</div>
            <div className="day">{day}</div>
        </div>
    );
}
export default MyDate; 