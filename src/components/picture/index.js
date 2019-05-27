import Photo from './photo.sc'
import React from 'react'
import {random} from 'common/utils'

const src = () => `./public/images/photo-0${random(1, 2)}.jpg`

const Picture = () => (
  <Photo image={src}/>
)

export default Picture
