import type {ComponentProps} from 'react'
import {Svg} from './svg.scss'

export type IconGlyph = 'pizza' | 'trash'

type Props = ComponentProps<'svg'> & {
  glyph: IconGlyph
  rotation?: number
  size?: string
  strokeWidth?: string
}

export const Icon = ({
  glyph,
  rotation,
  size = '24px',
  strokeWidth, ...props}: Props) => (
  <Svg
    height={size}
    rotating={rotation === Infinity}
    width={size}
    rotation={rotation}
    strokeWidth={strokeWidth}
    {...props}>
    <use href={`/static/icon-sprites.svg#${glyph}`}/>
  </Svg>
)

export default Icon
