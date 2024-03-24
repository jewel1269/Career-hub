import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ card }) => {
    const { id, logo, job_title, company_name, remote_or_onsite,
        location, job_type, salary } = card; 

    return (
        <div className="card w-[650px] h-[400px] p-7 bg-slate-100 glass">
            <figure><img src={logo} alt="company logo" /></figure> 
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <h2>{company_name}</h2> 
                <div className="flex gap-2">
                    <button className="btn btn-outline btn-success">{remote_or_onsite}</button>
                    <button className="btn btn-outline btn-success">{remote_or_onsite}</button>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center"> {/* Added items-center class */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9.69 18.933a.75.75 0 0 1-.38 0C9.11 18.846 9 18.836 9 18.836s-.11.01-.308-.077l-.006-.003-.018-.008a5.741 5.741 0 0 1-.281-.14 7.292 7.292 0 0 1-.757-.433c-.62-.384-1.445-.966-2.274-1.765C4.698 14.988 3 12.493 3 9a7 7 0 0 1 14 0c0 3.492-1.698 5.988-3.355 7.584a13.731 13.731 0 0 1-2.273 1.765 11.842 11.842 0 0 1-.976.544l-.062.029-.018.008-.006.003ZM10 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" clipRule="evenodd" />
                        </svg>
                        <h2>{location}</h2>
                    </div>
                    <div className="flex items-center"> {/* Added items-center class */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <h2>{salary}</h2>
                    </div>
                </div>
                <div className="card-actions">
                    <NavLink to={`statistics/${id}`}><button className="btn btn-outline btn-success">View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Card;
