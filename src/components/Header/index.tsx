import { HeaderContainer, HeaderContent, NewTransactionButton } from './style'

import * as Dialog from '@radix-ui/react-dialog'

import logo from '../../assets/Logo_header.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Plus } from 'phosphor-react'

export function Header() {
  const { width } = useWindowSize()

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>
              {width > 576 ? 'Nova transação' : <Plus size={24} />}
            </NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
