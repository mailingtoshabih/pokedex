import baby from "../assets/baby.png"
import { Navbar } from '../components/Navbar'
import { Listings } from '../components/Listings'
import { Footer } from '../components/Footer'
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"



// abilities
// experience
// moves
// height
// weight






export const Details = () => {



    const { name } = useParams();

    const [pokemon, setPokemon] = useState(null);
    const [tab, setTab] = useState(true);
    const [save, setSave] = useState(true);


    





    useEffect(() => {

        window.scroll(0, 0);

        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((res) => setPokemon(res.data))
            .catch((e) => console.log(e.message));

    }, [name]);



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
        <div>
            <Navbar />


            <div className='px-3 md:flex w-full'>



                <div className='relative mt-4 sm:p-10 shrink-0 mx-auto'>

                    <div className="p-5 w-72 rounded-xl shadow-2xl shadow-gray-300
                        hover:skew-y-2 duration-700 mx-auto">


                        {
                            pokemon?.sprites?.other?.home?.front_default ?

                                <img src={pokemon?.sprites?.other?.home?.front_default} className="" alt="" />
                                :
                                <div className="py-15 p-10">
                                    <p className=" h-5 w-5 animate-ping mx-auto bg-blue-400 rounded-full">
                                    </p>
                                </div>
                        }



                        <div className="flex justify-between">

                            <div className='my-5 text-gray-800 text-3xl font-semibold capitalize text-center'>
                                {pokemon && pokemon?.name}

                                <div className="mt-2 flex space-x-2">
                                    {pokemon && pokemon.types.map((n, idx) =>
                                        <p key={idx} className="bg-blue-100 px-3 text-sm rounded-full">{n.type.name}</p>
                                    )}
                                </div>
                            </div>



                            {/* bookmarks */}
                            {/* <div className="mt-6">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="w-6 h-6">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                </svg>
                            </div> */}



                            <div className='mt-7 duration-500 ' onClick={handleSave}>
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






                {/* about tab */}

                <div className={`${tab ? "hidden" : "block"} my-10 p-10 w-full border border-violet-950 rounded-xl`}>

                    <div className="flex space-x-3">

                        <p className={`${tab ? "text-violet-800" : "text-gray-300"} my-5 text-3xl font-semibold cursor-pointer`} onClick={() => setTab(!tab)}>
                            About
                        </p>

                        <p className={`${tab ? "text-gray-300" : "text-violet-800"}  my-5 text-3xl font-semibold  cursor-pointer`} onClick={() => setTab(!tab)}>
                            Stats
                        </p>

                    </div>
                    <hr />


                    {
                        pokemon?.stats?.map((s, idx) => (

                            <div key={idx} className="my-2 flex justify-between text-gray-700">

                                <p className="my-1 font-semibold capitalize">{s.stat.name}</p>
                                <p>{s.base_stat}</p>


                            </div>
                        ))
                    }



                </div>




                {/* stats tab */}

                <div className={`${tab ? "block" : "hidden"} my-10 p-10 w-full border border-violet-950  rounded-xl `}>

                    <div className="flex space-x-3">

                        <p className={`${tab ? "text-violet-800" : "text-gray-300"} my-5 text-3xl font-semibold cursor-pointer`} onClick={() => setTab(!tab)}>
                            About
                        </p>

                        <p className={`${tab ? "text-gray-300" : "text-violet-800"} font-semibold   my-5 text-3xl cursor-pointer`} onClick={() => setTab(!tab)}>
                            Stats
                        </p>


                    </div>
                    <hr />



                    <div className="my-2 flex justify-between text-gray-700">

                        <p className="font-semibold">Species</p>
                        <p>{pokemon && pokemon.species.name}</p>

                    </div>
                    <hr />

                    <div className="my-2 flex justify-between text-gray-700">
                        <p className="font-semibold">Base Experience</p>
                        <p>{pokemon && pokemon.base_experience}</p>
                    </div>
                    <hr />

                    <div className="my-2 flex justify-between text-gray-700">
                        <p className="font-semibold">Height</p>
                        <p>{pokemon && pokemon.height}</p>
                    </div>
                    <hr />

                    <div className="my-2 flex justify-between text-gray-700">
                        <p className="font-semibold">Weight</p>
                        <p>{pokemon && pokemon.weight}</p>
                    </div>
                    <hr />

                    <div className="my-2 flex justify-between text-gray-700">
                        <p className="font-semibold">Order</p>
                        <p>{pokemon && pokemon.order}</p>
                    </div>
                    <hr />

                    <div className="my-2 flex justify-between text-gray-700">
                        <p className="font-semibold">Forms</p>
                        <p>{pokemon && pokemon.forms.map(n => n.name)}</p>
                    </div>
                    <hr />

                </div>

            </div>




            <div className="mb-10 flex justify-between">
                <Link to="/" className=" px-10 p-5 font-bold text-gray-800 bg-blue-100 rounded-xl ml-3 sm:ml-12  duration-700
                hover:bg-violet-950 hover:text-white">
                    Go Back
                </Link>

                <Link to="/bookmarks" className=" px-10 p-5 font-bold text-gray-800 bg-blue-100 rounded-xl mr-3 sm:mr-12  duration-700
                hover:bg-violet-950 hover:text-white">
                    Bookmarks
                </Link>
            </div>






            <Footer />
        </div>
    )
}
