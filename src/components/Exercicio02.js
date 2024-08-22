import { View, Text, Button, StyleSheet } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio02 = () => {

    const [first, setfirst] = useState(second)

    function incrementar(){
        setContador(constador+1)
    }

    function decrementar(){
        setContador(constador-1)
    }


  return (
    <View styles = {styles.container}>
      <Button title='incrementar' onPress=
      {incrementar} />
      <Text>O contador está em: {contador}</Text>

      <Button title='decrementar' onPress=
      {decrementar} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio02