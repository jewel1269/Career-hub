import { useEffect, useState } from "react";
import Cate from "../Cate";

const MainBody = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <div className="text-center text-xl mt-10">
                <h1 className="text-5xl my-3 font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-4 my-5 ml-24">
                    {
                        categories.map(item => <Cate key={item.id} item={item}></Cate>)
                    }
                </div>
            
        </div>
    );
};

export default MainBody;