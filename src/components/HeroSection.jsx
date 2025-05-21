import {motion} from 'framer-motion'
import video1 from "../assets/cute.mp4"
import video2 from "../assets/cutesy.mp4"

const HeroSection = () => {
    return (
<div className="flex flex-col items-center mt-6 lg:mt-20">
    <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"> Take on some of the best Gamers in the world 
        and see if you have what it takes to be one of the best and compete at the highest level 
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="py-3 px-4 mx-3 rounded-md border-black bg-gradient-to-r from-red-500 to-red-800">

                Play for free

            </a>
            <a href="#" className ="py-3 px-4 mx-3 rounded-md border">
                Join Community

            </a>

        </div>
        <div className ="flex mt-10 justify-center">
            <video autoPlay loop muted className="rounded-lg w-1/2 border-red-700
             shadow-amber-400 mx-2 my-4">
                <source src={video1} type="video/mp4" />
                Your browser does not support the video tag.
             </video>
             <video autoPlay loop muted className="rounded-lg w-1/2 border-red-700
             shadow-amber-400 mx-2 my-4">
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
             </video>
        </div>
</div>


    )
};
export default HeroSection;