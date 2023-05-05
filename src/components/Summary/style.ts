import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 992px) {
    justify-content: center;
    gap: 1rem;
  }
  @media (max-width: 768px) {
    overflow: auto;
    justify-content: initial;

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px transparent;
      border-radius: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar {
      width: 10px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: #555;
    }

    padding-bottom: 5px;
  }
`

interface SummaryProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 2rem;
  }

  > span {
    margin: 1rem auto;
    color: ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
      > span:nth-child(3) {
        color: ${(props) => props.theme['gray-300']};
      }
    `}
`
