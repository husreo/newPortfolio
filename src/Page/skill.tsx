import { skills } from "../config/menu"

export const Skill = () => {
    return <div className='py-8 text-white flex flex-col gap-3'>
        <div className="border border-dashed border-zinc-400 px-3 md:px-6 py-4 bg-[#0d1d31]">
            <p className="text-left text-lime-500 text-lg">Front End</p>
            <ul className="flex flex-wrap w-full mt-3 gap-1 md:gap-2 first:marker:hidden">
                {skills[0].map((val, index) =>
                    <li key={index} className="flex justify-between text-sm items-center">
                        <span>{val}</span>
                        {index !== skills[0].length - 1 && <span className="ml-1 md:ml-2">•</span>}
                    </li>
                )}
            </ul>
        </div>
        <div className="border border-dashed border-zinc-400 px-3 md:px-6 py-4 bg-[#0d1d31]">
            <p className="text-left text-cyan-600 text-lg">Back End</p>
            <ul className="flex flex-wrap w-full mt-3 gap-1 md:gap-2 first:marker:hidden">
                {skills[1].map((val, index) =>
                    <li key={index} className="flex justify-between text-sm items-center">
                        <span>{val}</span>
                        {index !== skills[1].length - 1 && <span className="ml-1 md:ml-2">•</span>}
                    </li>
                )}
            </ul>
        </div>
        <div className="border border-dashed border-zinc-400 px-3 md:px-6 py-4 bg-[#0d1d31]">
            <p className="text-left text-red-600 text-lg">Program Language</p>
            <ul className="flex flex-wrap w-full mt-3 gap-1 md:gap-2 first:marker:hidden">
                {skills[2].map((val, index) =>
                    <li key={index + "skill"} className="flex justify-between text-sm items-center">
                        <span>{val}</span>
                        {index !== skills[2].length - 1 && <span className="ml-1 md:ml-2">•</span>}
                    </li>
                )}
            </ul>
        </div>
        <div className="border border-dashed border-zinc-400 px-3 md:px-6 py-4 bg-[#0d1d31]">
            <p className="text-left text-yellow-600 text-lg">Blockchain</p>
            <ul className="flex flex-wrap w-full mt-3 gap-1 md:gap-2 first:marker:hidden">
                {skills[3].map((val, index) =>
                    <li key={index} className="flex justify-between text-sm items-center">
                        <span>{val}</span>
                        {index !== skills[3].length - 1 && <span className="ml-1 md:ml-2">•</span>}
                    </li>
                )}
            </ul>
        </div>
        <div className="border border-dashed border-zinc-400 px-3 md:px-6 py-4 bg-[#0d1d31]">
            <p className="text-left text-pink-600 text-lg">Others</p>
            <ul className="flex flex-wrap w-full mt-3 gap-1 md:gap-2 first:marker:hidden">
                {skills[4].map((val, index) =>
                    <li key={index} className="flex justify-between text-sm items-center">
                        <span>{val}</span>
                        {index !== skills[4].length - 1 && <span className="ml-1 md:ml-2">•</span>}
                    </li>
                )}
            </ul>
        </div>
    </div>
}