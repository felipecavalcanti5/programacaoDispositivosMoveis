import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useState } from 'react'
import React from 'react'

const Exercicio03 = () => {

    const [text, setText] = useState('')

  return (
    <View style={StyleSheet.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Digite algo aqui..."
    />
        <Text>Você digitou: {text}</Text>
    </View>
  )
}

const stylos = StyleSheet.createContext({
    container: {
        alignItems: 'center', 
        justifyContent: 'center',
        padding: 100
    }
})

export default Exercicio03