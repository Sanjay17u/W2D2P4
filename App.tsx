import React, { useState } from 'react'
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Text,
  Alert,
} from 'react-native'

export default function App() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  // 🔐 Password Strength
  const isWeak = password.length > 0 && password.length < 6
  const isMedium = password.length >= 6 && password.length < 10
  const isStrong = password.length >= 10

  // ✅ Match check
  const isMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword

  // 🚀 Button condition
  const canSubmit = isStrong && isMatch

  const submitHandler = () => {
    Alert.alert('Password set successfully 🎉')
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        placeholder="Confirm Password"
        placeholderTextColor="gray"
        secureTextEntry
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Match Message */}
      {password.length > 0 && confirmPassword.length > 0 && (
        <Text style={isMatch ? styles.match : styles.notMatch}>
          {isMatch ? '✔ Password Match' : '❌ Password Not Match'}
        </Text>
      )}

      {/* Strength Message */}
      {isWeak && <Text style={styles.weak}>❌ Weak Password</Text>}
      {isMedium && <Text style={styles.medium}>⚠ Medium Password</Text>}
      {isStrong && <Text style={styles.strong}>✅ Strong Password</Text>}

      <Button title="Submit" disabled={!canSubmit} onPress={submitHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  input: {
    backgroundColor: '#1e293b',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#fff',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },

  match: {
    color: '#22c55e',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },

  notMatch: {
    color: '#ef4444',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '600',
  },

  weak: {
    color: '#ef4444',
    fontSize: 14,
    marginBottom: 10,
  },

  medium: {
    color: '#facc15',
    fontSize: 14,
    marginBottom: 10,
  },

  strong: {
    color: '#22c55e',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: '600',
  },
})
