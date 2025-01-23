import GitHubCalendar from 'react-github-calendar';

export const About = () => {
    return <div className='py-8'>
        <div className="text-zinc-500 text-md sm:text-lg leading-6">I'm a full-stack developer from Netherlands.
        I've been working to improve myself in web development field since 2017 with a focus on responsive web applications. And started career as web3 develoer since 2019. My focus is on <span className='text-zinc-300'>Smart Contract , web3 dApp for trading tools and web development</span> on the several blockchain - Solana, Ethereum, Bitcoin ... I have worked on <span className='text-zinc-300'> NFTs, play-to-earn games, casinos, DeFi, DEX, and crypto & memecoin trading bot projects, as well as frontend developmen</span>t. Additionally, I have experience working as a Full-Stack Engineer, primarily building robust APIs, with skills in <span className='text-zinc-300'> React, Next.js, TypeScript, NodeJS, Rust, Golang, Solidity</span> and other frameworks. Enthusiastic about blockchain and web3 industry, constantly seeking opportunities for continuous learning and growth.
        <br/>Visit for more detail <a href='https://drive.google.com/file/d/1dPYF77CKMM1y-00nzpBjBdN8MfWcJMdg/view?usp=drive_link' target='block' className='underline hover:text-white transition text-zinc-200'>here</a></div>
        <div className='w-full overflow-auto'>

            <GitHubCalendar
                username="husreo"
                year={'last'}
                transformTotalCount={true}
                style={{ marginTop: "30px", color: "#71717a", minWidth: '800px' }}
            />
        </div>
    </div> 

    
}