import i01 from './photo-01.jpg'
import i02 from './photo-02.jpg'
import i03 from './photo-03.jpg'
import i04 from './photo-04.jpg'
import i05 from './photo-05.jpg'
import i06 from './photo-06.jpg'
import {random} from '@/common/utils'

const imageList: string[] = [i01, i02, i03, i04, i05, i06]

const randomImages = () => (
  `url(${imageList[random(0, imageList.length - 1)]})`
)

export default randomImages
