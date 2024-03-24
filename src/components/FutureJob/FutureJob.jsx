import { useEffect, useState } from "react";
import Card from "./Card";

const FutureJob = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);

    return (
        <div>
            <div className="text-center text-xl mt-10">
                <h1 className="text-5xl my-3 font-bold">Featured Jobs</h1>
                <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-10 mt-9 ml-24">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
            {/* <button className="btn text-c">See All</button> */}
        </div>
    );
};

export default FutureJob;
