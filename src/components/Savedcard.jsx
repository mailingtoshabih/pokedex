import { Link } from "react-router-dom"
import baby from "../assets/baby.png"
import { useState, useEffect } from "react"
import axios from 'axios'






export const Savedcard = ({ pokemon }) => {

    const [pic, setPic] = useState(null);



    const handleSave = (e) => {
        localStorage.removeItem(pic?.id);
        window.location.reload();
    }



    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res) => setPic(res.data))
            .catch((e) => console.log(e.message));

    }, [pokemon])














    return (
        <div className='relative'>


            <div className='p-4 md:p-10  rounded-xl 
                shadow-2xl shadow-gray-200 
              hover:shadow-violet-300 duration-500'>


                <div className='w-full -mt-10 '>
                    <Link to={`/details/${pic?.name}`}>
                        {
                            pic ?
                                <img src={pic.sprites.other.home.front_default} className="" alt="" />
                                :
                                <div className="p-10">
                                    <p className=" h-5 w-5 animate-ping mx-auto bg-blue-400 rounded-full">
                                    </p>
                                </div>
                        }
                    </Link>
                </div>




                <div className='flex justify-between mt-5 '>

                    <div className='w-full flex justify-between capitalize text-sm font-semibold text-gray-700 mx-auto'>

                        <p>{pokemon && pokemon}</p>

                        <div className="cursor-pointer" onClick={handleSave}>
                            {
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-5 h-5">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                </svg>
                            }
                        </div>

                    </div>

                </div>

            </div>








        </div>
    )
}
