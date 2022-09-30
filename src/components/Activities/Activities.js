
import React, { useEffect, useState } from 'react';
import SingleActivities from '../SingleActivities/SingleActivities';
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
            <h2 className='m-5'>Select Your Best One</h2>
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
            <h4>Personal information</h4>
        </div>
        </div>
    );
};

export default Activities;