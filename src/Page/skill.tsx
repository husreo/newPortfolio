import { skills } from "../config/menu"

export const Skill = () => {
    return <div className='py-8 text-white flex flex-col gap-3'>
       <div className="border border-dashed border-zinc-700 px-4 py-2 bg-zinc-950">
            <p className="text-left text-lime-500">Front End</p>
            <div className="w-full mt-3">
                <p className="text-xs sm:text-sm text-left ">{skills[0].join(' | ')}</p>
            </div>
       </div>
       <div className="border border-dashed border-zinc-700 px-4 py-2 bg-zinc-950">
            <p className="text-left text-cyan-600">Back End</p>
            <div className="w-full mt-3">
                <p className="text-xs sm:text-sm text-left ">{skills[1].join(' | ')}</p>
            </div>
       </div>
       <div className="border border-dashed border-zinc-700 px-4 py-2 bg-zinc-950">
            <p className="text-left text-red-600">Program Language</p>
            <div className="w-full mt-3">
                <p className="text-xs sm:text-sm text-left ">{skills[2].join(' | ')}</p>
            </div>
       </div>
       <div className="border border-dashed border-zinc-700 px-4 py-2 bg-zinc-950">
            <p className="text-left text-yellow-600">Blockchain</p>
            <div className="w-full mt-3">
                <p className="text-xs sm:text-sm text-left ">{skills[3].join(' | ')}</p>
            </div>
       </div>
       <div className="border border-dashed border-zinc-700 px-4 py-2 bg-zinc-950">
            <p className="text-left text-pink-600">Others</p>
            <div className="w-full mt-3">
                <p className="text-xs sm:text-sm text-left ">{skills[4].join(' | ')}</p>
            </div>
       </div>
    </div> 
}