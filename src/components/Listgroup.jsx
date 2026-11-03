import React from 'react'
import Listitem from './Listitem'

const Listgroup = ({ transactions, editTransaction, removeTransaction }) => {
    return (
        <ul className='my-4'>
            {
                transactions.map(transaction => <Listitem key={transaction.id} transaction={transaction} editTransaction={editTransaction} removeTransaction={removeTransaction} />)
            }
        </ul>

    )
}

export default Listgroup
