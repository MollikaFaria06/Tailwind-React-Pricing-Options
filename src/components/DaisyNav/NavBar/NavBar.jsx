import React from 'react';
import Link from './Link';

const navLinks = [
  {
    name: "Home",
    path: "/",
    id: 1
  },
  {
    name: "About",
    path: "/about",
    id: 2
  },
  {
    name: "Services",
    path: "/services",
    id: 3
  },
  {
    name: "Blog",
    path: "/blog",
    id: 4
  },
  {
    name: "Contact",
    path: "/contact",
    id: 5
  }
];


const NavBar = () => {
    return (
        <nav>

            
            <ul className='flex'>
                {
                navLinks.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>

            {/* <ul className='flex'>
                {
                    navLinks.map(route => <li className='mr-10'>
                    <a href={route.path}></a>{route.name}</li>)
                }

            </ul> */}

            {/* <ul className='flex'>
                <li className='mr-10'><a href="/"></a>Home</li>
                <li className='mr-10'><a href="/about">About</a></li>
                <li className='mr-10'><a href="/blog">Blog</a></li>
                
            </ul> */}
        </nav>
    );
};

export default NavBar;