import { useEffect, useState } from "react";
import useData from "../../Statistics/Hooks/useData";
import { NavLink, useParams } from "react-router-dom";


const Applied = () => {
    const [info, setInfo] = useState({});
    const { cards } = useData();
    const { id } = useParams();

    useEffect(() => {
        if (cards) {
            const singleData = cards.find(card => card.id == id);
            setInfo(singleData);
        }
    }, [cards, id]);
    console.log(info)
    return (
        <div>
            <div className="p-6 py-12 inset-0 h-64 bg-violet-100 dark:bg-violet-100 text-gray-900 dark:text-gray-50">
                <h1 className="text-center text-3xl font-bold">
                    Applied Job
                </h1>
                 </div> 
                <div className=" card  border mt-10  h-[45vh] p-4 bg-base-100 shadow-xl">
                    <div className="card flex  justify-around items-center card-side p-4 bg-base-100 shadow-xl">
                        <div className="flex p-4 border rounded-3xl ">
                        <figure><img src={info?.logo} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2>{info?.job_title}</h2>
                            <h2>{info?.company_name}</h2>
                            <div className="flex gap-2">
                                <button className="btn btn-outline btn-success">{info?.remote_or_onsite}</button>
                                <button className="btn btn-outline btn-success">{info?.remote_or_onsite}</button>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M9.69 18.933a.75.75 0 0 1-.38 0C9.11 18.846 9 18.836 9 18.836s-.11.01-.308-.077l-.006-.003-.018-.008a5.741 5.741 0 0 1-.281-.14 7.292 7.292 0 0 1-.757-.433c-.62-.384-1.445-.966-2.274-1.765C4.698 14.988 3 12.493 3 9a7 7 0 0 1 14 0c0 3.492-1.698 5.988-3.355 7.584a13.731 13.731 0 0 1-2.273 1.765 11.842 11.842 0 0 1-.976.544l-.062.029-.018.008-.006.003ZM10 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z" clipRule="evenodd" />
                                    </svg>
                                    <h2>{info?.location}</h2>
                                </div>
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h2>{info?.salary}</h2>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="card-actions ">
                            <NavLink to={-1}><button className="btn btn-primary">Details</button></NavLink>
                        </div>
                    </div>
                </div>
           
        </div>
    );
};

export default Applied;