
import React, { useEffect, useState } from 'react';
import SingleActivities from '../SingleActivities/SingleActivities';
import picture from '../../picture.jpg';
import  './Activities.css';


const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( () => {
        fetch('fakeData.json')
        .then(res=>res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div 
        className='all-activities-container'>
            
        <div className='m-10'>
            <h2 className='m-5 text-xl font-semibold'>Select Your Best One</h2>
        <div className="activities-container">
        
        {
            activities.map(activity => <SingleActivities 
                key={activity.id}
                activity={activity}
                ></SingleActivities>)
        }
        </div>
        </div>
        
        <div 
        className="information-container">
        <div className="card w-full bg-base-100 shadow-xl h-full">
        <div>
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img className='mr-0' src= {picture} alt=""/></figure>
        <div className="card-body">
        <h2 className="text-base tracking-tight ">Abdullah Al Masoud</h2>
        <p className='text-base'>Mirpur,Dhaka</p>
        </div>
        </div>
        

        <div className="card-actions">
        <button className="btn btn-block w- full">Activity Completed</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Activities;