import { Link } from "react-router-dom"

export const Hero=()=>
{
    return(
        
            <section className="m-[80px]">
            <div className="bg-black text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">FoodFest</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Food: The Tastiest Afinity
                        </h2>
                        <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite recipes and
                            register now to showcase your recipes .</p>
                        <Link to="/auth"
                            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Explore Now</Link>
                    </div>
                    <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div>
                                <img className="inline-block mt-28 hidden xl:block w-[250px] h-[300px] rounded-xl p-8"  src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
                                </div>
                                <div>
                                    <img className="inline-block mt-24 md:mt-0 md:p-0 w-[250px] h-[300px] rounded-xl p-8"   src="https://images.unsplash.com/photo-1560684352-8497838a2229?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=528&q=80"/>
                                    </div>
                                    <div>
                                        <img className="inline-block mt-28 hidden xl:block w-[250px] h-[300px] rounded-xl p-8"  src="https://images.unsplash.com/photo-1562059390-a761a084768e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1119&q=80"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        </section>
        
    )
} 