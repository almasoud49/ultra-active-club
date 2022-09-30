
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
        <div className='personal-information mt-10'>
            <div>
            <p>75kg</p>
            <p>Weight</p>
            </div>
            <div>
                <p>6.5kg</p>
                <p>Height</p>
            </div>
            <div>
                <p>25yrs</p>
                <p>Age</p>
            </div>
        </div>
        <h2>Add A Break</h2>
        <div className='break-time mt-8'>
        <button className="btn btn-circle ml-5 mr-2">
        10s
        </button>
        <button className="btn btn-circle mr-2">
        20s
        </button>
        <button className="btn btn-circle mr-2">
        30s
        </button>
        <button className="btn btn-circle mr-2">
        40s
        </button>
        <button className="btn btn-circle">
        50s
        </button>

        </div>
        <h2>Exercise Details</h2>
        <div className='bg-slate-200'>
        <h2 className="">
        Exercise time
        <span className='ml-5 text-xs'>200seconds</span>
        </h2>
        </div>
        <div className='bg-slate-200'>
        <h2 className="m-5">
        Break time
        <span className='ml-5 text-xs'>15seconds</span>
        </h2>
        </div>


        <div className="card-actions">
        <div className="toast toast-end">
    <div className="alert alert-info">
        <div>
        <span>Thanks</span>
        </div>
    </div>
    </div>
        <button className="btn btn-block w- full">Activity Completed</button>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Activities;