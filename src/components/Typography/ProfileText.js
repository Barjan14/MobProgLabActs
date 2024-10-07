import { View, Text } from 'react-native'
import React from 'react'

const ProfileText = () => {
  return (
    <View>
  <Text style={{ 
  fontSize: 20, 
  fontWeight: 'bold', 
  paddingBottom: 15, 
  color: '#FFFFFF', 
  width: '100%',          // Makes the text container fill the entire width
  textAlign: 'center',    // Centers the text within the full-width container
  letterSpacing: 2        // Adds spacing between characters for a more expanded look
}}>
  Profile
</Text>

    </View>
  )
}

export default ProfileText