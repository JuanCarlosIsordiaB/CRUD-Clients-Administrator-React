

import React from 'react';
import {Link} from 'react-router-dom';

export const Cliente = ({client}) => {

  const {id,nombre, empresa, email, telefono} = client;
  
  return (
    <tr className='border-b'>
      <td className='p-6 space-y-2'>
        <p className='text-2xl text-gray-800'>{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className='p-6'>
        <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
        <p className='text-gray-600'><span className='text-gray-800 uppercase font-bold'>Tel: </span>{telefono}</p>
      </td>
      <td className='flex justify-center gap-1 mt-4'>
        
        <Link
          type='submit'
          className='px-3 rounded-md text-white bg-green-600 hover:bg-green-700 uppercase font-bold text-s  py-3'  
        >
          Edit
        </Link>
        <Link
          type='submit'
          className='px-3 rounded-md text-white bg-yellow-600 hover:bg-yellow-700 uppercase font-bold text-s  py-3'  
        >
          View
        </Link>
        <button
          type='submit'
          className=' px-3 rounded-md text-white bg-red-600 hover:bg-red-700 uppercase font-bold text-s  py-3'
        >
          Delete
        </button>
        
       
        

      </td>
    </tr>
  )
}
