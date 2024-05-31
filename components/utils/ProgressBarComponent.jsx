import { View, Text } from 'react-native'
import React from 'react'
import { primary, secondary, third, fourth } from "../../components/color/Index";
import * as Progress from 'react-native-progress';

const ProgressBar = ({probs, name}) => {
  return (
    <View style={{ 
      marginVertical: 10,
     }}>
      <Text style={{ 
        color: fourth,
        fontSize: 16,
        marginBottom: 5
       }}>{name}</Text>
      <View style={{ 
        display: 'flex',
        flexDirection:'row',
        alignItems: 'center',
        gap: 20
       }}>
        <Progress.Bar color={fourth} progress={probs} width={300} height={10}/>
        <Text style={{ 
          color: fourth,
          fontSize: 16,
         }}>{probs}</Text>
      </View>
    </View>
  )
}

export default ProgressBar;