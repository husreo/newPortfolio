import { projects } from "../config/menu"
import { Link } from "react-router-dom"

export const Work = () => {
    return <div className='py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-2'>
        { projects.map((val, index) => 
            <div className="border border-dashed border-zinc-700 px-4 py-2 bg-[#0d1d31] flex flex-col justify-between">
                    <Link to={val.links[0].link} className="text-left text-white hover:underline text-md sm:text-lg" target="block">{val.title}</Link>
                    <img src={val.image} alt="" className="mt-3" />
                    <div className="w-full mt-3">
                        <p className="text-md text-left text-lime-200">{val.description}</p>
                    </div>
                    <div className="w-full mt-3">
                        <p className="text-sm sm:text-lg text-left text-zinc-500">{val.stack.join(' | ')}</p>
                    </div>
            </div>
        ) }
    </div> 
}