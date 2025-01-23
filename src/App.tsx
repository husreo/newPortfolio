  import React from 'react';
  import './App.css';
  import './affect.sass';
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  import { About } from './Page/info'
  import { Work } from './Page/work';
  import { Skill } from './Page/skill';
  import { Contact } from './Page/contact';
  import { Footer } from './Component/Footer';
  import { Typewriter } from './Component/Typewriter';

  function App() {
    const [menu, setMenu] = React.useState([
      {
        title: 'About',
        url: '/',
        selected: true
      },
      {
        title: 'Work',
        url: '/work',
        selected: false
      },
      {
        title: 'Skills',
        url: '/skills',
        selected: false
      },
      {
        title: 'Location',
        url: '/contact',
        selected: false
      },
    ])
    
    const changeMenue = (index: number) => {
      const menuClone = [...menu];
      for (let i = 0; i < menuClone.length; i++) {
        menuClone[i].selected = false
      }
      menuClone[index].selected = true;
      setMenu(menuClone)
    }

    const quantity = 15;
  
    // Create an array of 15 firefly elements
    const fireflies = Array.from({ length: quantity }, (_, index) => (
      <div 
        key={index} 
        className="firefly"
      />
    ));
    return ( 
      <div className="App px-2 sm:px-4 md:px-20 geo">
        
        <BrowserRouter>
          <div className="container">
            {fireflies}
          </div>
          
          <div className='flex justify-end mt-4 Audiowide fixed top-0'>
            <Link to='https://x.com/intent/follow?screen_name=husreo_tx' className='text-white rounded-xl px-4 py-1 bg-sky-700 hover:bg-sky-800 transition' target='block' >Follow X</Link>
          </div>
          {/* <div className='rounded-full mx-auto w-64 h-64 p-8 flex justify-center border border-zinc-500 border-dashed m-2 items-center mt-12 sm:mt-36'>
            <img src="/setoqu_sol.png" className='rounded-full' alt="" />
          </div> */}
          <div id='visuals 'className='w-64 h-64 mx-auto mt-12 sm:mt-36'>
            <div className="visual">
              <svg viewBox="0 0 320 320">
                <defs>
                  <circle id="circle-clip" cx="50%" cy="50%" r="25%" />
                  <clipPath id="avatar-clip">
                    <use href="#circle-clip" />
                  </clipPath>
                </defs>

                <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
                  <animate attributeName="r" values="25%;50%" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="1;0" dur="4s" repeatCount="indefinite" />
                </circle>

                <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
                  <animate attributeName="r" values="25%;50%" dur="4s" begin="1s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="1;0" dur="4s" begin="1s" repeatCount="indefinite" />
                </circle>

                <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
                  <animate attributeName="r" values="25%;50%" dur="4s" begin="2s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="1;0" dur="4s" begin="2s" repeatCount="indefinite" />
                </circle>

                <circle cx="50%" cy="50%" r="25%" fill="white" fill-opacity="1">
                  <animate attributeName="r" values="25%;50%" dur="4s" begin="3s" repeatCount="indefinite" />
                  <animate attributeName="fill-opacity" values="1;0" dur="4s" begin="3s" repeatCount="indefinite" />
                </circle>

                <image height="50%" width="50%" x="25%" y="25%" href="/setoqu_sol.png" clip-path="url(#avatar-clip)" />  
              </svg>
            </div>
          </div>
          <div className='text-zinc-500 text-md sm:text-lg leading-6 mt-4'>
            <Typewriter text="Steven Springer" delay={100} /><br/>I'm a full-stack developer based in Netherlands.<br/> I love to build <a href='https://github.com/husreo' target='block' className='underline hover:text-white transition'>things</a> with web and blockchain and post <a href='https://twitter.com/husreo_tx' target='block' className='underline hover:text-white transition'>news</a>
          </div>
          <div className='flex justify-center gap-2 mt-12'>
            {menu.map((val, index) => <Link to={val.url} key={val.title + index} className= {`${val.selected? 'text-white border-white shadow-xl':'text-zinc-500 border-zinc-500'} text-md sm:text-lg w-24 py-1 border border-dashed  hover:text-white transition`}onClick={() => changeMenue(index)} >{val.title}</Link>)}
          </div>
          <Routes>
            <Route path='/' element = {<About/>} />
            <Route path='/work' element = {<Work/>} />
            <Route path='/skills' element = {<Skill/>} />
            <Route path='/contact' element = {<Contact/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }

  export default App;
