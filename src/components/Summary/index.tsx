import { SummaryCard, SummaryContainer } from './style'

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

import { priceFormatter } from '../../utils/fomatter'
import { useSummary } from '../../hooks/useSummary'

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useTransactionDatesOverview } from '../../hooks/useTransactionDatesOverview'

export function Summary() {
  const summary = useSummary()
  const { firstIncome, lastOutcome, firstTransaction, lastTransaction } =
    useTransactionDatesOverview()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#80b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
        {!!firstIncome.getTime() && (
          <span>
            Útima entrada em{' '}
            {format(new Date(firstIncome), 'dd/MMMM', {
              locale: ptBR,
            }).replace('/', ' de ')}
          </span>
        )}
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
        {!!lastOutcome.getTime() && (
          <span>
            Útma saída em{' '}
            {format(new Date(lastOutcome), 'dd/MMMM', {
              locale: ptBR,
            }).replace('/', ' de ')}
          </span>
        )}
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>

        {!!lastOutcome.getTime() && (
          <span>
            {` De
            ${format(new Date(firstTransaction), 'dd/MM/yy', {
              locale: ptBR,
            })} até ${format(new Date(lastTransaction), 'dd/MM/yy', {
              locale: ptBR,
            })} `}
          </span>
        )}
      </SummaryCard>
    </SummaryContainer>
  )
}
