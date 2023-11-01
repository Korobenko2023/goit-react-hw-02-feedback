import { TdTransactionItem, TrTransactionItem } from "./TransactionItem.styled"
export const TransactionItem = ({transaction: {type, amount, currency}}) => {
    return (
        <TrTransactionItem>
            <TdTransactionItem>{type}</TdTransactionItem>
            <TdTransactionItem>{amount}</TdTransactionItem>
            <TdTransactionItem>{currency}</TdTransactionItem>
        </TrTransactionItem> 
    )
}