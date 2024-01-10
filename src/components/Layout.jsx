

import React from 'react';
import {Link, useLocation} from 'react-router-dom';

export const Layout = ({children}) => {
    const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
        <aside className='md:w-1/4 bg-blue-800 px-5 py-10'>
            <h2 className='font-bold text-white text-6xl text-center'>CRUD - Client Administrator</h2>
            <nav>
                <Link className={`${location.pathname === '/' ? 'bg-blue-500' : 'bg-blue-800'} text-3xl block py-4 px-5 mt-9 rounded-md transition-all hover:bg-blue-500 text-white font-semibold`  } to='/'>Clients</Link>
                <Link className={`${location.pathname === '/new' ? 'bg-blue-500' : 'bg-blue-800'} text-3xl block py-4 px-5 mt-2 rounded-md transition-all hover:bg-blue-500 text-white font-semibold`  } to='/new'>Add Client</Link>
            </nav>
        </aside>
        <main className='md:w-3/4 p-10 md:h-screen bg-gray-200 overflow-scroll'>
            {children}
        </main>
    </div>
  )
}
