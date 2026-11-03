import React from 'react'

const Dashboard = ({ transactions }) => {

    let income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)

    let expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0)


    let balance = transactions
        .reduce((acc, transaction) => acc + transaction.amount, 0)



    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className=' shadow-2xl bg-green-500 p-4 rounded-md'>
                <h1 className='text-4xl font-bold text-white my-2'>{income}</h1>
                <h2 className='text-white font-bold'>Total Income</h2>
            </div>
            <div className='shadow-2xl bg-red-500 p-4 rounded-md'>
                <h1 className='text-4xl font-bold text-white my-2'>{expense}</h1>
                <h2 className='text-white font-bold'>Total Expense</h2>
            </div>
            <div className='shadow-2xl bg-yellow-500 p-4 rounded-md'>
                <h1 className='text-4xl font-bold text-white my-2'>{balance}</h1>
                <h2 className='text-white font-bold'>Total Balance</h2>
            </div>
        </div>
    )
}

export default Dashboard
