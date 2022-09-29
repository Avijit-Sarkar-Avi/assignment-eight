import React from 'react';
import './Qa.css'
const Qa = () => {
    return (
        <div className='qa'>
            <h2>How does React work?</h2>
            <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>

            <h2>Difference between props and state?</h2>
            <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. </p>

            <h2>How to use UseEffect without load data?</h2>
            <p>With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.</p>
        </div>
    );
};

export default Qa;