import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import {Link, useNavigate} from 'react-router-dom';

export const Cliente = ({client}) => {

  const navigate = useNavigate();
  const {id,nombre, empresa, email, telefono} = client;

  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure to delete it?');
    if (confirmDelete) {
      axios.delete(`https://json-server-api-mocha.vercel.app/clientes/${id}`)
        .then(response => {
          toast.success('All fields are required', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
          toast.error('Error', { position: toast.POSITION.BOTTOM_CENTER });
        });
      
    }
  };
  
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
          to={`/editar/${id}`}
          type='submit'
          className='px-3 rounded-md text-white bg-green-600 hover:bg-green-700 uppercase font-bold text-s  py-3'  
        >
          Edit
        </Link>
        <Link
          to={`/ver/${id}`}
          type='submit'
          className='px-3 rounded-md text-white bg-yellow-600 hover:bg-yellow-700 uppercase font-bold text-s  py-3'  
        >
          View
        </Link>
        <button
          
          type='submit'
          className=' px-3 rounded-md text-white bg-red-600 hover:bg-red-700 uppercase font-bold text-s  py-3'
          onClick={(e) => handleDelete(id)}
        >
          Delete
        </button>
        
       
        

      </td>
      
      
    </tr>
    
  )
}
