import React from 'react';
import ReactDOM from 'react-dom/client';
import Logs from './Logs/Logs';
import './Logs/logs.css';

// const app = <div className='logs'>
//     <div className='item' >
//         <div className='data'>
//                 <div className='month'>4月</div>
//                  <div className='day'>19</div>
//         </div>
//         <div className='content'>
//             <div className='desc'>学习react</div>
//             <div className='time'>80分钟</div>
//         </div>

//     </div>
// </div>

const App = () => {
    
    return (
       <div> <Logs/></div>
        // <div className='logs'>
        //     <div className='item'>
        //         <div className='data'>
        //             <div className='month'>4月</div>
        //             <div className='day'>19</div>
        //         </div>
        //         <div className='content'>
        //             <div className='desc'>学习react</div>
        //             <div className='time'>80分钟</div>
        //         </div>
        //     </div>
        // </div>
    );
}
const app = <App />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);