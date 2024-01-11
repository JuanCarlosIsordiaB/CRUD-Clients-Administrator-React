
import axios from 'axios';
import { useState } from 'react';
import { Layout } from '../components/Layout';
import {Link, useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const NewCliente = () => {
  const navigate = useNavigate();

  const [inputData, setInputData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    notas:''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      inputData.nombre.trim() === '' ||
      inputData.email.trim() === '' ||
      inputData.empresa.trim() === '' ||
      inputData.telefono.trim() === '' ||
      inputData.notas.trim() === ''
    ) {
      toast.error('All fields are required', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }
    
    axios.post('https://json-server-api-mocha.vercel.app/clientes/', inputData)
      .then(e => {
       
        console.log('added');
      })
      toast.success('Client Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate('/');
      window.location.reload();
  }

  return (
    <Layout>
      <div>
        <h1 className='font-bold text-6xl text-blue-800 text-center mt-5'>Add New Client:</h1>
        <p className='text-3xl text-center mt-3 '>Start adding a new client.</p>
        <div className='flex justify-end'>
          <Link to='/' className='hover:bg-blue-800 rounded-md transition-all bg-blue-500 text-xl  py-3 px-2 text-white font-bold uppercase'>Go Back</Link>
        </div>
        <form 
          className='bg-white mt-6 p-6 rounded-md'
          onSubmit={handleSubmit}
        >
            <div className="mb-4 ">
            <label
                className="text-gray-800"
                htmlFor="nombre"
            >Name:</label>
            <input 
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Name of the client"
                name="nombre"
                onChange={(e) => setInputData({...inputData, nombre: e.target.value})}
            />
            </div>
            <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="empresa"
            >Company:</label>
            <input 
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Company of the client"
                name="empresa"
                onChange={(e) => setInputData({...inputData, empresa: e.target.value})}
            />
            </div>
    
            <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="email"
            >E-mail:</label>
            <input 
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Email of the client"
                name="email"
                onChange={(e) => setInputData({...inputData, email: e.target.value})}
            />
            </div>
    
            <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="telefono"
            >Phone:</label>
            <input 
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-200"
                placeholder="Phone of the client"
                name="telefono"
                onChange={(e) => setInputData({...inputData, telefono: e.target.value})}
            />
            </div>
    
            <div className="mb-4">
            <label
                className="text-gray-800"
                htmlFor="notas"
            >Notes:</label>
            <textarea
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-200 h-40 align-self"
                placeholder="Notes of the client"
                name="notas"
                onChange={(e) => setInputData({...inputData, notas: e.target.value})}
            />
            </div>
            <button
                className='hover:bg-blue-800 rounded-md transition-all bg-blue-500 text-xl w-full py-3 text-white font-bold uppercase'
            >
              Add Client
            </button>
      </form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div> 
    </Layout>
  )
}
