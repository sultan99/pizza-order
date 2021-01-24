import i01 from './photo-01.jpg'
import i02 from './photo-02.jpg'
import {random} from '@/common/side-effects'

const imageList: string[] = [i01, i02]

const randomImages = (): string => (
  imageList[random(0, 1)]
)

export default randomImages
