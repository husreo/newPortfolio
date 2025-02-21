import { Link } from "react-router-dom"
import { ReactNode } from 'react';
import {
  Github,
  Twitter,
  Gmail,
  Medium,
  Telegram
}
  from '@icons-pack/react-simple-icons';

const socialMediaIcons: { component: ReactNode; url: string }[] = [
  {
    component: <Github color='#fff' size={25} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    url: 'https://www.github.com/husreo',
  },
  {
    component: <Telegram color='#fff' size={25} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    url: 'https://t.me/stevensprg',
  },
  {
    component: <Twitter color='#fff' size={25} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    url: 'https://twitter.com/husreo_tx',
  },
  {
    component: <Gmail color='#fff' size={25} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    url: 'mailto:springers230@gmail.com',
  },
  {
    component: <Medium color='#fff' size={25} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    url: 'https://medium.com/@springers230',
  },
]
export const Footer = () => {
  return <div className='py-4'>
    <div className='flex gap-4 justify-center '>
      {socialMediaIcons.map((val, index) => <Link target='block' to={val.url}>{val.component}</Link>)}
    </div>
    <div className='text-zinc-400 text-sm md:text-md mt-2 Inter'>© 2024 Steven Inc. | Privacy Policy</div>
  </div>
}