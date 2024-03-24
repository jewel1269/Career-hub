

const Cate = ({ item }) => {
    const {logo, availability, category_name} = item;
    return (
        <div>
            <div className="max-w-xs p-6 rounded-md shadow-md bg-stone-100 dark:bg-gray-50 ">
                <img src={logo} alt="" className="object-cover object-center w-full rounded-md h-32 bg-gray-500 dark:bg-gray-500" />
                <div className="mt-6 mb-2">
                    <h2 className="text-xl font-semibold tracking-wide">{category_name}</h2>
                </div>
                <p className=" dark:text-gray-800">{availability}</p>
            </div>
        </div>
    );
};

export default Cate;