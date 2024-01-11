import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import { useNavigate, useParams } from 'react-router-dom';

export const EditCliente = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inputData, setInputData] = useState({
    id,
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    notas: ''
  });

  useEffect(() => {
    axios.get(`https://json-server-api-mocha.vercel.app/clientes/${id}`)
      .then(res => setInputData(res.data))
      .catch(error => console.error('Error al obtener datos del cliente:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(inputData);
    
    axios.put(`http://localhost:3000/clientes/${id}`, inputData)
      .then(response => {
        alert('Client Updated');
        navigate('/');
      })
      .catch(error => {
        console.error('Error: ', error);
    
      });
      
  };

  return (
    <Layout>
        <h1 className='font-bold text-6xl text-blue-800 text-center mt-5'>Edit Client</h1>
     
      <form className='bg-white p-3 rounded-md mt-8' onSubmit={handleSubmit}>
        <div className="mb-4" >
          <label className="text-gray-800" htmlFor="id">ID:</label>
          <input
            id="id"
            type="number"
            className="mt-2 block w-full p-3 bg-gray-200"
            placeholder="ID of the client"
            name="id"
            value={inputData.id}
            disabled
          />
        </div>
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
                value={inputData.nombre}
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
                value={inputData.empresa}
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
                value={inputData.email}
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
                value={inputData.telefono}
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
                value={inputData.notas}
                onChange={(e) => setInputData({...inputData, notas: e.target.value})}
            />
            </div>
        
        <button
          className='hover:bg-blue-800 rounded-md transition-all bg-blue-500 text-xl w-full py-3 text-white font-bold uppercase'
        >
          Update Client
        </button>
      </form>
    </Layout>
  );
};
