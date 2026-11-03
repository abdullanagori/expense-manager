import React from 'react'

const Navbar = ({ handleShowForm, showForm, changetheme }) => {
    return (
        <nav className='bg-blue-600 py-2 px-8 flex items-center justify-between'>
            <h1 className='text-white font-bold text-xl'>KhataBook</h1>
            {
                !showForm && <button onClick={handleShowForm}
                 className='bg-emerald-500 p-1 text-sm rounded-md hover:bg-emerald-600 text-white font-bold cursor-pointer px-2'>
                + Transaction</button>
            }
            <button onClick={() => changetheme()} className="bg-black font-bold text-white rounded-lg p-1 hover:bg-gray-600 cursor-pointer">Theme</button>
        </nav>
    )
}

export default Navbar
