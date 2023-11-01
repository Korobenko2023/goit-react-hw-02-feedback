import { ContainerTransactionHistory, TheadTransactionHistory } from "./TransactionHistory.styled"
import { TransactionItem } from "./TransactionItem"
export const TransactionHistory = ({ items }) => {
    return (
       <ContainerTransactionHistory>
           <TheadTransactionHistory>
              <tr>
                 <th>Type</th>
                 <th>Amount</th>
                 <th>Currency</th>
               </tr>
            </TheadTransactionHistory>
               <tbody>
                {items.map(transaction => (
                     <TransactionItem key={transaction.id} transaction={transaction} />
                 ))}
               </tbody>
        </ContainerTransactionHistory>  
    )
}