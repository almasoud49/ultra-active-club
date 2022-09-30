import React from 'react';
import './SingleActivities.css';

const SingleActivities = (props) => {
    const {img, name, time}= props.activity;
    return (
        <div className='sm:text-center'>
<div className='single-activity '>
    <div>
    <img src= {img} alt=""></img>
    <p className='text-sm font-light'>{name}</p>
    <p className='text-sm'>Time Required: {time}</p>
    </div>
    
    <button className="btn btn-block mt-8">Add to List</button>
    </div>
        </div>
    );
};

export default SingleActivities;