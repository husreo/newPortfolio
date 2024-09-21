import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { About } from './Page/info'
import { Work } from './Page/work';
import { Skill } from './Page/skill';
import { Contact } from './Page/contact';
import { ReactNode } from 'react';
import { 
  Github,
  Twitter,
  Gmail,
  Medium,
  Telegram
}
from '@icons-pack/react-simple-icons';

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
  const socialMediaIcons: { component: ReactNode; url: string }[] = [
    {
      component: <Github color='#fff' size={20} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      url: 'https://www.github.com/husreo',
    },
    {
      component: <Telegram color='#fff' size={20} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      url: 'https://t.me/DevCutup',
    },
    {
      component: <Twitter color='#fff' size={20} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      url: 'https://twitter.com/husreo_tx',
    },
    {
      component: <Gmail color='#fff' size={20} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      url: 'mailto:springers230@gmail.com',
    },
    {
      component: <Medium color='#fff' size={20} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
      url: 'https://medium.com/@springers230',
    },
]
  const changeMenue = (index: number) => {
    const menuClone = [...menu];
    for (let i = 0; i < menuClone.length; i++) {
      menuClone[i].selected = false
    }
    menuClone[index].selected = true;
    setMenu(menuClone)
  }
  return ( 
    <div className="App px-2 sm:px-4 md:px-20 Audiowide">
      <BrowserRouter>
        <div className='flex justify-end mt-4'>
          <Link to='https://x.com/intent/follow?screen_name=husreo_tx' className='text-white rounded-xl px-4 py-1 bg-sky-700 hover:bg-sky-800 transition' target='block' >Follow X</Link>
        </div>
        <div className='rounded-full mx-auto w-64 h-64 p-8 flex justify-center border border-zinc-700 border-dashed m-2 items-center mt-12 sm:mt-36'>
          <img src="/setoqu_sol.png" className='opacity-70 rounded-full' alt="" />
        </div>
        <div className='text-zinc-700 text-sm leading-6 mt-4'><div className='text-zinc-100 text-xl'>Steven Springer</div>I'm a full-stack developer based in Netherlands.<br/> I love to build <a href='https://github.com/husreo' target='block' className='underline hover:text-white transition'>things</a> with web and blockchain and post <a href='https://twitter.com/husreo_tx' target='block' className='underline hover:text-white transition'>news</a> regularly.Find out more.
        <div className='flex gap-4 justify-center mt-4'>
            {socialMediaIcons.map((val, index) => <Link target='block' to = {val.url}>{val.component}</Link> )}
        </div>
        </div>
        <div className='flex justify-center gap-2 mt-12'>
          {menu.map((val, index) => <Link to={val.url} key={val.title + index} className= {`${val.selected? 'text-white':'text-zinc-700'} text-xs sm:text-sm w-24 py-1 border border-dashed border-zinc-700 hover:text-white transition`}onClick={() => changeMenue(index)} >{val.title}</Link>)}
        </div>
        <Routes>
          <Route path='/' element = {<About/>} />
          <Route path='/work' element = {<Work/>} />
          <Route path='/skills' element = {<Skill/>} />
          <Route path='/contact' element = {<Contact/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
