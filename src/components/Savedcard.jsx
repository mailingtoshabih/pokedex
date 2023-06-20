import { Link } from "react-router-dom"
import baby from "../assets/baby.png"
import { useState, useEffect } from "react"
import axios from 'axios'






export const Savedcard = ({ pokemon }) => {

    const [pic, setPic] = useState(null);
    const [save, setSave] = useState(true);







    useEffect(() => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((res) => setPic(res.data.sprites.other.home.front_default))
            .catch((e) => console.log(e.message));

    }, [pokemon])


    useEffect(() => {
        setSave(localStorage.getItem(pokemon?.id) === name);
    }, [pokemon]);




    const handleSave = (e) => {

        // if true, then already bookmarked
        if (save) {
            localStorage.removeItem(pokemon?.id)
            setSave(!save);
        }
        else {
            localStorage.setItem(pokemon.id, pokemon.name);
            setSave(!save);
        }
    }







    return (
        <div className='relative'>


            <div className='p-4 md:p-10  rounded-xl 
                shadow-2xl shadow-gray-200 
              hover:shadow-violet-300 duration-500'>


                <div className='w-full -mt-10 '>
                    <Link to={`/details/${pokemon.name}`}>
                        {
                            pic ?
                                <img src={pic} className="" alt="" />
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

                        <div  onClick={handleSave}>
                            {
                                !save ?

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                        className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                    </svg>
                                    :
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
