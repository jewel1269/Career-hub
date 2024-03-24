import { useEffect, useState } from "react";


const useData = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setCards(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    return {cards}
        
 
};

export default useData;