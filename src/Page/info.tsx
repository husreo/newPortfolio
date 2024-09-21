import GitHubCalendar from 'react-github-calendar';

export const About = () => {
    return <div className='py-8'>
        <div className="text-zinc-700 text-xs sm:text-sm leading-6">I'm a full-stack developer from Netherlands.
        I've been working to improve myself in web development field since 2017 with a focus on responsive web applications. And started career as web3 develoer since 2019. My focus is on Smart Contract, web development on the Solana chain (as well as Ethereum, Bitcoin Rune & Ordinal, SEI). I have worked on NFTs, play-to-earn games, casinos, DeFi, DEX, and DAO projects, as well as frontend development. Additionally, I have experience working as a Full-Stack Engineer, primarily building robust APIs, with skills in React, Next.js, TypeScript, NodeJS, Rust, Golang , and other frameworks. Enthusiastic about blockchain and web3 industry, constantly seeking opportunities for continuous learning and growth.
        <br/>Visit for more detail <a href='https://drive.google.com/file/d/1dPYF77CKMM1y-00nzpBjBdN8MfWcJMdg/view?usp=drive_link' target='block' className='underline hover:text-white transition text-zinc-500'>here</a></div>
        <div className='w-full overflow-auto'>

            <GitHubCalendar
                username="husreo"
                year="last"
                transformTotalCount={true}
                style={{ marginTop: "30px", color: "#3F3F46", minWidth: '800px' }}
            />
        </div>
    </div> 

    
}