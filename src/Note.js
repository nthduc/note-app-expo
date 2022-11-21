import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import React, {useState, useRef} from 'react';
import { StatusBar } from 'expo-status-bar';
import { actions, RichEditor, RichToolbar } from 'react';


const Note = () => {

  const richText = useRef();
  const scrollRef = useRef();

  const [descHTML, setDescHTML] = useState('');
  const [title, setTitle] = useState('');

  const richTextHandler = (descriptionText) => {
    if(descriptionText){
      setDescHTML(descriptionText);
    } else {
      setDescHTML('');
    }
  }

  return (
   <SafeAreaView style={styles.container}>
    <StatusBar style='auto' />

    <View style={styles.richTextContainer}>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <TouchableOpacity style={{width: '85%', backgroundColor: '#427dde', borderRadius: 10, padding: 10}}>
          <Text style={{textAlign: 'center', color: '#e6e6e6', fontWeight: '600'}}>
            Save Changes
          </Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
      keyboardVerticalOffset={100} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      >
        <ScrollView ref={scrollRef} style={styles.noteMain}>
          <RichEditor 
          placeholder='Type here...'
          initialContentHTML={descHTML}
          ref={richText}
          onChange={richTextHandler}
          initialFocus
          onCurrentFocus={(p) => scrollRef.current.scrollTo({y: p+30, animated: true})}

          >

          </RichEditor>
        </ScrollView>
      </KeyboardAvoidingView>

      <View style={{paddingHorizontal: 20, marginTop: 10, marginBottom: 20,backgroundColor: '#e6e6e6'}}>
        <TextInput placeholder="Enter Title Here..." placeholderTextColor={'gray'} style={{fontSize:16,paddingVertical}}/>
      </View>

      <RichToolbar 
      editor={richText}
      actions={[
        actions.setBold,
        actions.setItalic,
        actions.setUnderline,
        actions.setStrikethrough,
        actions.insertBulletsList,
        actions.insertOrderList,
        actions.undo,
        actions.redo,
        actions.keyboard,
      ]}
      />

     
    </View>
   </SafeAreaView>
  )
}

export default Note

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingBottom: 10
  },

  noteMain: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },

  richTextContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column-reverse',
    marginBottom: 10
  }
})