import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import logo from '../assets/logo.png';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Image source={logo} style={styles.logoImg} />
        </View>

        <Text style={styles.aboutText}>
          This app is a simple notepad with multiple useful features. You can use it write notes , memos, messages, shoppoing lists, tasks, and to-do lists. It works as a simple word processing program and gives you the flexibility to type in whatever you need.
        </Text>
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-between',
  },

  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },

  logoImg: {
    width: 1500,
    height: 150,
    borderRadius: 10,
    opacity: 0.7
  },

  content: {
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    maxWidth: 200,
    borderRadius: 10,
    marginBottom: 20
  },

  aboutText: {
    color: '#404040',
    marginBottom: 15,
    textAlign: 'jusify',

  },

  versionText: {
    textAlign: 'center',
    color: '#9f9f9f'
  }
})