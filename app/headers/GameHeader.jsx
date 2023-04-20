import React from 'react'
import { TouchableOpacity} from 'react-native'
import styles from '../headers/ScreenHeaderBtn.style'
import LeftArrow from '../assests/icons/LeftArrow'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>

      <LeftArrow />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn