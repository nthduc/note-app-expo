import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useRef } from 'react';
import StatusBar from 'expo-status-bar';
import { Menu, AlertDialog, Button } from 'native-base';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Home = ({ navigation }) => {

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);

  const cancelRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <ScrollView style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.headerText}>My Notes</Text>
        </View>

        <View style={styles.subHeader}>
          <Menu
            placement='bottom left'
            w="190"
            trigger={(triggerProps) => {
              return (
                <Pressable accessibilityLabel='More options' {...triggerProps}>
                  <MaterialCommunityIcons name='dots-vertical' size={24} color="#404040" />
                </Pressable>

              );
            }}>

            <Menu.Item onPress={() => setIsOpen(!isOpen)} >Delete All</Menu.Item>
            <Menu.Item onPress={() => navigation.navigate('About')}>About</Menu.Item>
            <Menu.Item></Menu.Item>
          </Menu>
          <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
            <AlertDialog.Content>
              <AlertDialog.CloseButton />
              <AlertDialog.Header>Delete All Notes</AlertDialog.Header>
              <AlertDialog.Body>
                <Text style={{ color: '#404040' }}>
                  This will remove all your notes from this app. This action cannot be reversed
                </Text>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button.Group space={2}>
                  <Button 
                    variant="unstyled"
                    colorScheme="coolGray"
                    onPress={onClose}
                    ref={cancelRef}
                  >
                    Cancel
                  </Button>

                  <Button colorScheme="danger">Delete</Button>
                </Button.Group>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog>
        </View>

            <View style={styles.noteContainer}>
              <View style={styles.noteHeader}>
                <Text style={styles.noteDate}>05/08/2022</Text>
                <Text style={styles.noteView}>05/08/2022</Text>
              </View>

              <TouchableOpacity style={styles}>
                <View style={styles.noteCardWrapper}>
                  <View style={styles.noteLeftContaner}>
                    <View style={{backgroundColor: '#427dde', height: 55,width: 5, borderRadius: '50%'}}></View>
                  </View>

                  <View style={styles.noteMiddleContent}>
                    <Text style={styles.topText}>Festival Note</Text>
                    <Text style={styles.middleText}>This is the note for festival</Text>
                    <Text style={styles.bottomText}>2.35pm</Text>
                  </View>

                  <TouchableOpacity style={styles.noteRightContent}>
                    <FontAwesome5 style='trash' size={16} color='#404040' />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>

      </ScrollView>

      <View style={styles.addButtonView}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Note', {noteId: null})}>
          <Feather name='plus' size={20} color='white' />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2'
  },
  main: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },

  subHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 20,
  },  
  headerText: {
    fontSize: 28,
    fontWeight: '400',
  },
  noteContainer: {
    paddingBottom: 30
  },

  noteHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginBottom: 10,
  },

  noteCardWrapper: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#404040',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    marginBottom: 10,
  },

  noteLeftContent: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  noteMiddleContent: {
    flex: 0.8,
  },

  noteRightContent: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  topText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#404040',
    marginBottom: 6,
  },

  middleText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9f9f9f',
    marginBottom: 10,
  },

  bottomText: {
    fontSize: 12,
    color: '9f9f9f',
  },

  addButtonView: {
    marginTop: 10,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    paddinghorizontal:20
  },

  addButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#427dde',
    padding: 15,
    borderRadius: '50%',
  }

});