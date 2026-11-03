import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Listgroup from './components/Listgroup'
import Form from './components/Form'

const App = () => {


  const [showForm, setShowForm] = useState(false)
  const [transactions, setTransactions] = useState([])

  const [edit, setEdit] = useState({
    transaction: {},
    isEdit: false
  })

  const handleShowForm = () => {
    setShowForm(!showForm)
  }


  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions])
  }

  const editTransaction = (transaction) => {

    handleShowForm()
    setEdit({
      transaction: transaction,
      isEdit: true
    })

  }

  const updateTransaction = (updatedTransaction) => {
    setTransactions(transactions.map(transaction => transaction.id === updatedTransaction.id ? updatedTransaction : transaction))
    setEdit({ transaction: {}, isEdit: false })
  }

  const removeTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id))
  }

const [theme, settheme] = useState(false)

const changetheme = () => {
settheme(!theme)
}


  return (
    <>
      <Navbar handleShowForm={handleShowForm} showForm={showForm}  changetheme={changetheme} />
      <div className={theme ? "min-h-screen p-8 bg-gray-800 text-gray-300" : "min-h-screen p-8"}>
        {
          showForm && <Form handleShowForm={handleShowForm} addTransaction={addTransaction} edit={edit} updateTransaction={updateTransaction} />
        }
        <Dashboard transactions={transactions} />
        <Listgroup transactions={transactions} editTransaction={editTransaction} removeTransaction={removeTransaction} />
      </div>
    </>
  )
}

export default App
