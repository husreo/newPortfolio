import React from 'react';
import logo from './logo.svg';
import './App.css';
import { menu } from './config/menu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './Page/info'

function App() {
  return ( 
    <div className="App px-2 sm:px-4 md:px-20 Audiowide">
      <div className='flex justify-end mt-4'>
        <button className='text-white rounded-xl px-4 py-1 bg-sky-700 hover:bg-sky-800 transition'>Follow X</button>
      </div>
      <div className='rounded-full mx-auto w-64 h-64 p-8 flex justify-center border border-zinc-700 border-dashed m-2 items-center mt-36'>
        <img src="/setoqu_sol.png" className='opacity-70 rounded-full' alt="" />
      </div>
      <div className='text-zinc-700 text-sm leading-6 mt-4'><div className='text-zinc-100 text-xl'>Steven Springer</div>I'm a full-stack developer based in Netherlands.<br/> I love to build <a href='https://github.com/husreo' target='block' className='underline hover:text-white transition'>things</a> with web and blockchain and post <a href='https://twitter.com/husreo_tx' target='block' className='underline hover:text-white transition'>news</a> regularly.Find out more.</div>
      <div className='flex justify-center gap-2 mt-12'>
        {menu.map((val, index) => <button className=' text-zinc-700 text-sm w-24 py-1 border border-dashed border-zinc-700 hover:text-white transition'>{val.title}</button>)}
      </div>
      <About/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element = {<About/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
