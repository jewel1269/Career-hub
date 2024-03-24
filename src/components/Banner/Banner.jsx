

const Banner = () => {
    return (
        <div className="p-6 py-12 inset-0  bg-violet-100 dark:bg-violet-100 text-gray-900 dark:text-gray-50">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div>
                        <h2 className="text-start text-5xl  font-semibold">One Step <br /> Closer To Your
                            <br /><span className="text-pink-300">Dream Job</span>
                        </h2>
                        <p className="mt-3">Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your <br /> job application from start to finish.</p>
                     <button className="btn mt-3 p-3 text-xl btn-accent">Get Start</button>  
                    </div>

                    <div className="w-[650px] mt-3 h-[550px]">
                        <img className="h-[598px]" src="/src/assets/images/jewel.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;