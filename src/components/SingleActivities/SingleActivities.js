import React from 'react';
import './SingleActivities.css';

const SingleActivities = (props) => {
    const {img, name, time}= props.activity;
    return (
        
    <div className='single-activity'>
    <div>
    <img src= {img} alt=""></img>
    <p className='text-sm font-extralight'>{name}</p>
    <p className='text-sm'>Time Required: {time}</p>
    </div>
    
    <button className="btn btn-block">Add to List</button>
    </div>
    
        
        
        
    );
};

export default SingleActivities;