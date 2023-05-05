import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto;
  padding: 0 1.5rem;

  @media (max-width: 576px) {
    padding: 0;
  }
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;
  td {
    padding: 1.25rem 2rem;
    background: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }

  @media (max-width: 768px) {
    tr {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(50%, 50%));
      grid-template-rows: auto, auto, auto;
      justify-content: space-between;
      align-items: center;
      margin: 10px auto;
      max-width: 100%;

      td:first-child {
        grid-column: 1 / 3;
        width: 100%;
        grid-row: 1;
        font-size: 1.5rem;
        border-bottom-left-radius: 0;
        border-top-right-radius: 6px;
      }
      td:nth-child(2) {
        grid-column: 1 / 3;
        grid-row: 2;
        font-size: 2rem;
      }
      td:nth-child(3) {
        grid-column: 1;
        grid-row: 3;

        width: 100%;
        border-bottom-left-radius: 6px;
        font-size: 1.2rem;
        color: ${(props) => props.theme['gray-500']};
      }
      td:nth-child(4) {
        grid-column: 2;
        grid-row: 3;
        width: 100%;
        font-size: 1.2rem;
        text-align: end;
        border-top-right-radius: 0;
        border-bottom-right-radius: 6px;
        color: ${(props) => props.theme['gray-500']};
      }
    }
  }

  @media (max-width: 576px) {
    tr {
      max-width: 90%;
    }
  }
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
