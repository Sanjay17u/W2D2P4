import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Button, Text, Alert } from 'react-native'


function App() {

  const [text, setText] = useState('')
  const [textNext, setTextNext] = useState('')
  const min = text.length < 6
  const minNext = textNext.length < 6
  const med = text.length >= 6 && text.length < 10
  const medNext = textNext.length >= 6 && textNext.length < 10
  const max = text.length >= 10
  const maxNext = textNext.length >= 10


  const inputHandler = (e: any) => {
    setText(e)
    // console.log(e)
  }

  const confirmPassword = (e: any) => {
    setTextNext(e)
    // console.log(e)
  }

  const submitHandler = () => {
    Alert.alert('Password Match Perfectly')
  }


  return (
    <>
      <View style={styles.container}>
        <TextInput placeholder='Password' placeholderTextColor="gray" secureTextEntry={true} onChangeText={inputHandler} value={text} style={styles.mainInput} />

        {text.length === 0 && textNext.length > 0 ? '' : text.length > 0 && textNext.length === 0 ? '' : text.length === 0 && textNext.length === 0 ? '' : text.length === textNext.length ? <Text style={styles.matchPassword}>✔️ Password Match</Text> : <Text style={styles.matchNOTPassword}>❌ Not Matched</Text>}

        <TextInput placeholder='Confirm Password' placeholderTextColor="gray" secureTextEntry={true} onChangeText={confirmPassword} value={textNext} style={styles.mainInput} />

        {text.length === 0 && textNext.length === 0 ? '' : min && minNext ? <Text style={styles.min}>❌ Weak Password</Text> : med || medNext ? <Text style={styles.med}>⚠️ Medium Password</Text> : max || maxNext ? <Text style={styles.max}>✅ Strong Password</Text> : ""}

        <Button onPress={submitHandler} disabled={text.length === textNext.length && text && textNext ? false : true} title='Submit' />

      </View>
    </>
  )
}

export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainInput: {
    color: 'white',
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20
  },


  min: {
    color: 'red',
    fontWeight: '800',
    fontSize: 20,
    marginVertical: 20
  },

  med: {
    color: 'yellow',
    fontWeight: '800',
    fontSize: 20,
    marginVertical: 20
  },

  max: {
    color: 'green',
    fontWeight: '800',
    fontSize: 20,
    marginVertical: 20
  },


  matchPassword: {
    color: 'green',
    fontWeight: '800',
    fontSize: 15,
    marginVertical: 20,
  },

  matchNOTPassword: {
    color: 'red',
    fontWeight: '800',
    fontSize: 15,
    marginVertical: 20,
  }
})