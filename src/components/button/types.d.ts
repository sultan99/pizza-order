import { FunctionComponent, MouseEvent } from 'react'

type Props = {
  icon: string
  onClick: (event?: MouseEvent) => void
}

export type SexyButton = FunctionComponent<Props>