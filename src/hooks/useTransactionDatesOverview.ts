import { useMemo } from 'react'

import { max, min } from 'date-fns'

import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransactionDatesOverview() {
  const transactions = useContextSelector(
    TransactionsContext,
    ({ transactions }) => {
      return transactions
    },
  )

  const overview = useMemo(() => {
    const allDates = transactions.map(
      (transaction) => new Date(transaction.createdAt),
    )

    const incomeDates = transactions
      .filter((transaction) => transaction.type === 'income')
      .map((transaction) => new Date(transaction.createdAt))

    const outcomeDates = transactions
      .filter((transaction) => transaction.type === 'outcome')
      .map((transaction) => new Date(transaction.createdAt))

    const firstIncome = min(incomeDates)

    const lastOutcome = max(outcomeDates)

    const firstTransaction = min(allDates)

    const lastTransaction = max(allDates)

    return { firstTransaction, lastTransaction, firstIncome, lastOutcome }
  }, [transactions])

  return overview
}
