import React, { useEffect, useState } from 'react'

const Form = ({ handleShowForm, addTransaction, edit, updateTransaction }) => {

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()

        !edit.isEdit ?
            addTransaction({ id: crypto.randomUUID(), text, amount: parseInt(amount) }) :
            updateTransaction({ id: edit.transaction.id, text, amount: parseInt(amount) })

        handleShowForm()
        setText("")
        setAmount("")

    }


    useEffect(() => {
        setText(edit.transaction.text)
        setAmount(edit.transaction.amount)
    }, [edit])


    return (
        <form onSubmit={handleSubmit} className='border border-gray-300 p-4 my-4'>
            <input value={amount} onChange={(e) => setAmount(e.target.value)} className='border border-gray-400 w-full p-2 my-2' type="number" placeholder='Enter Amount' />
            <input value={text} onChange={(e) => setText(e.target.value)} className='border border-gray-400 w-full p-2 my-2' type="text" placeholder='Enter Transaction Details' />
            <button className='bg-emerald-500 hover:bg-emerald-600 cursor-pointer w-full p-2 text-white font-bold my-2'>{edit.isEdit ? "Update" : "Save"} Transaction</button>
            <button onClick={handleShowForm} className='bg-red-500 hover:bg-red-600 cursor-pointer w-full p-2 text-white font-bold my-1'>Cancel</button>
        </form>
    )
}

export default Form
