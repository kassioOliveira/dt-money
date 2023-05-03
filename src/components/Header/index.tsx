import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";

import logo from "../../assets/Logo_header.svg"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <NewTransactionButton>
          Nova transação
        </NewTransactionButton>

      </HeaderContent>
    </HeaderContainer>
  )
}

