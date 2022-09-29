import React from 'react';
import './Sidebar.css';
import myPicture from '../../images/avijit_sarkar.jpg'
const Sidebar = (props) => {
    const { cart } = props;

    let timer = 0;
    for (const gymTime of cart) {
        timer = timer + gymTime.time;
    }


    return (
        <div className='sidebar'>

            <div className='firstPart'>
                <img src={myPicture} alt="" />
                <h3>Avijit Sarkar</h3>
            </div>
            <p>Bangladesh</p>


            <div className='secondPart'>
                <div >
                    <div className='firstPart'>
                        <h1>60</h1><span>kg</span>
                    </div>
                    <h2>Weight</h2>
                </div>
                <div >
                    <div className='firstPart'>
                        <h1>5.7</h1><span>inch</span>
                    </div>
                    <h2>Height</h2>
                </div>
                <div>
                    <div className='firstPart'>
                        <h1>24</h1><span>year</span>
                    </div>
                    <h2>Age</h2>
                </div>
            </div>

            <h2>Add a Break</h2>

            <div className='thirdPart'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
            </div>
            <h1>Exercise Details</h1>

            <div className='fourPart'>
                <h2>Exercise Time: {timer}s</h2>
            </div>
            <br />
            <div className='fourPart'>
                <h2>Break Time: </h2>
            </div>

            <br />

            <button className='btn-complete'>Activity Completed</button>

        </div>
    );
};

export default Sidebar;