import React from 'react'
import { TouchableOpacity} from 'react-native'
import styles from '../headers/ScreenHeaderBtn.style'
import Logout from '../assests/icons/Logout'

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>

      <Logout />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn