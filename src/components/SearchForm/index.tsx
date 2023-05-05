import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { useWindowSize } from '../../hooks/useWindowSize'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export default function SearchForm() {
  const { width } = useWindowSize()

  const { transactions, fetchTransactions } = useContextSelector(
    TransactionsContext,
    ({ transactions, fetchTransactions }) => {
      return { transactions, fetchTransactions }
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      {width < 576 && (
        <>
          <h3>Transações</h3>
          <span>{transactions.length} itens</span>
        </>
      )}
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        {width > 575 && 'Buscar'}
      </button>
    </SearchFormContainer>
  )
}
