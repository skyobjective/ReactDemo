import React from "react";
import Content from "./Content/content";
import MyDate from "./MyDate/myDate";
import './logItem.css';
import Card from "../UI/card";
const Items = (props) => {
    console.log('gggggg'+props);
    const date = props.date; // 确保 props.date 是一个有效的 Date 对象
    const month1 = date.getMonth() + 1; // 获取月份，注意月份从0开始
    const day1 = date.getDate(); // 获取日期
    
    const handleDelete = () => {
        if (props.onDelete) {
            props.onDelete(props.id);
        }
    };
    
    return (
        <Card className="item">
            <div className="log-item-content">
                <MyDate month={month1} day={day1} />
                <Content desc={props.name} time={props.time} />
            </div>
            <button className="delete-btn" onClick={handleDelete}>删除</button>
        </Card>
    );
}
export default Items;