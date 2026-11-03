import React from 'react'

const Listitem = ({ transaction, editTransaction, removeTransaction }) => {
    return (
        <li className='my-2 relative shadow-2xl border border-gray-200 p-4 rounded-md'>
            <p className='text-gray-400 my-2 text-sm'>id:{transaction.id}</p>
            <h1 className='text-4xl font-bold my-2'>{transaction.amount}</h1>
            <h2 className='text-lg font-semibold'>{transaction.text}</h2>
            <div className='absolute top-5 right-5'>
                <button onClick={() => editTransaction(transaction)} className='bg-yellow-500 hover:bg-yellow-600 cursor-pointer p-1 text-sm font-bold mx-1 text-white rounded-lg'>Edit</button>
                <button onClick={() => removeTransaction(transaction.id)} className='bg-red-500 hover:bg-red-600 cursor-pointer p-1 text-sm font-bold mx-1 text-white rounded-lg'>Delete</button>
            </div>
        </li>
    )
}

export default Listitem
