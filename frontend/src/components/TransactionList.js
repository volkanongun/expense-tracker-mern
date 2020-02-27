import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from '../components/Transaction'

const TransactionList = () => {

	const {transactions} = useContext(GlobalContext)
	// console.log(transactions)

	return (
		<div>
			<h3>History</h3>
		      <ul id="list" className="list">
			      {transactions.map(transaction => (
			      	<Transaction key={transaction.id} transaction={transaction}></Transaction>
			      ))}
		      </ul>
		</div>
	)
}

export default TransactionList