import { SummaryCard, SummaryContainer } from "./style";

import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

export  function Summary() {
  return (
    <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#80b37e"/>

                <strong>R$ 17.400,00</strong>
            </header>
        </SummaryCard>

        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68"/>

                <strong>R$ 17.400,00</strong>
            </header>
        </SummaryCard>

        <SummaryCard variant="green">
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color="#fff"/>

                <strong>R$ 17.400,00</strong>
            </header>
        </SummaryCard>
    </SummaryContainer>
  )
}
