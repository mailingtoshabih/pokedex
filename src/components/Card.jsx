import { Link } from "react-router-dom"
import baby from "../assets/baby.png"
import { useState, useEffect } from "react"
import axios from 'axios'






export const Card = ({ pokemon }) => {

    const [pic, setPic] = useState(null);




    useEffect(() => {

        axios.get(pokemon?.url)
            .then((res) => setPic(res.data.sprites.other.home.front_default))
            .catch((e) => console.log(e.message));


    }, [pokemon])








    return (
        <div className='relative'>

            <Link to={`/details/${pokemon.name}`}>

                <div className='p-4 md:p-10  rounded-xl 
                shadow-2xl shadow-gray-200 
              hover:shadow-violet-300 duration-500'>


                    <div className='w-full -mt-10 '>
                        {
                            pic ?
                                <img src={pic} className="" alt="" />
                                :
                                <div className="p-10">
                                    <p className=" h-5 w-5 animate-ping mx-auto bg-blue-400 rounded-full">
                                    </p>
                                </div>
                        }
                    </div>




                    <div className='flex justify-between mt-5 '>

                        <p className='capitalize text-sm font-semibold text-gray-700 mx-auto'>
                            {pokemon && pokemon.name}
                        </p>


                    </div>



                </div>




            </Link>




        </div>
    )
}
