
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Items from './LogItems/logitem';
import Card from './UI/card';
import './logsForm.css';

const Logs = () => {
    const [formData, setFormData] = useState({
        date: '',
        name: '',
        time: ''
    });
    
    const [results, setResults] = useState([
        {id:1, date: new Date('2022/11/2'), name: '学习JavaScript', time: '60'},
        {id:2, date: new Date('2023/10/10'), name: '学习CSS', time: '40'},
        {id:3, date: new Date('2024/2/11'), name: '学习HTML', time: '30'}
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.date || !formData.name || !formData.time) {
            alert('请填写所有字段');
            return;
        }

        const newLog = {
            id: Date.now() + '',
            date: new Date(formData.date),
            name: formData.name,
            time: formData.time
        };

        setResults([newLog, ...results]);
        
        setFormData({
            date: '',
            name: '',
            time: ''
        });
    };

    const handleDelete = (id) => {
        setResults(results.filter(item => item.id !== id));
    };

    const logItem = results.map((item) => <Items key={item.id} id={item.id} date={item.date} name={item.name} time={item.time} onDelete={handleDelete}/>);
    
    const emptyMessage = results.length === 0 ? (
        <div className="empty-message">没有找到日志项！</div>
    ) : null;
    
    return (
        <div>
            <Card className="logs-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="date">日期：</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="name">内容：</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="请输入学习内容"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="time">时间（分钟）：</label>
                        <input
                            type="number"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                            placeholder="请输入学习时间"
                            min="1"
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn">提交</button>
                </form>
            </Card>
            
            <Card className="logs">
                {emptyMessage}
                {logItem}
            </Card>
        </div>
    );
}
export default Logs;