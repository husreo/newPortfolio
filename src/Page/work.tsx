import { projects } from "../config/menu"
import { Link } from "react-router-dom"

export const Work = () => {
    return <div className='py-8 text-white grid grid-cols-1 md:grid-cols-2 gap-4'>
        {projects.map((val, index) =>
            <div key={index} className="project-block relative border border-dashed border-zinc-400 px-4 py-4 bg-[#0d1d31] flex flex-col justify-between rounded-lg">
                <Link to={val.links[0].link} className="text-left text-white hover:underline text-md" target="block">
                    {val.title}
                </Link>
                <img src={val.image} alt="" className="mt-3 w-full object-cover rounded-md" />
                <div className="w-full mt-3">
                    <p className="text-sm text-left text-lime-200">{val.description}</p>
                </div>
                {/* <div className="w-full mt-3">
                    <p className="text-sm sm:text-md text-left text-zinc-400">{val.stack.join(' | ')}</p>
                </div> */}
                <ul className="flex flex-wrap w-full mt-3 gap-1.5 first:marker:hidden text-zinc-400">
                    {val.stack.map((v, index) =>
                        <li key={index + "work"} className="flex items-center text-sm">
                            <span>{v}</span>
                            {index !== val.stack.length - 1 && <span className="ml-1.5 opacity-40">•</span>}
                        </li>
                    )}
                </ul>
            </div>
        )}
    </div>
}