
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Layout } from '../components/Layout'
import { Cliente } from '../components/Cliente';

export const Index = () => {

    const [data, setData] = useState([]);


    useEffect(() => {
      axios.get('http://localhost:3000/clientes')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])
    
    
  return (
    <Layout>
        <div>
            <h1 className='font-bold text-6xl text-blue-800 text-center mt-5'>Clients:</h1>
            <p className='text-3xl text-center mt-3 '>Start managing your clients</p>
            {
                data.length ? (
                    <table className='w-full bg-white shadow mt-5 table-auto '>
                        <thead className='bg-blue-800 text-white'>
                            <tr>
                                <th className='p-2'>Client</th>
                                <th className='p-2'>Contact</th>
                                <th className='p-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {
                                data.map( client => 
                                    
                                    <Cliente key={client.id} client={client} />
                                )
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className='text-center mt-10 bg-red-500 p-4 rounded-md text-white font-bold'>ERROR - There is no clients.</p>
                )
            }
        </div>
        
    </Layout>
  )
}
