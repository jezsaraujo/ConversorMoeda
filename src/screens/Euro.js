
import React, { useState } from 'react';
import { Text, SafeAreaView, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export function Euro ({navigation}) {
 const[input, setInput] = useState('');
 const[dolar,setDolar] = useState(6.40);
 const[result,setResult] = useState(0);

    function caldolar(){
        if (input === '') {
            alert('Insira um valor válido!')
          } else {
              setResult(input*dolar)
           };
    }

    return(
        <SafeAreaView style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Entre com o valor em Real'
        value={input}
        keyboardType='numeric'
        onChangeText={ (input) => setInput(input)}
        />
       <View style={styles.btnContainer}>
              <TouchableOpacity onPress={caldolar}>
                <Text style={styles.head}>Converter</Text>
              </TouchableOpacity>
              </View>
  
          {result > 0 ?
              <View style={styles.input}>
                  <Text>$ { parseFloat(result).toFixed(2) } </Text>
              </View>
          : null}
  
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    input:{
      fontSize:15,
      marginLeft:10,
      marginRight:10,
      marginTop:30,
      backgroundColor:'#FFF',
      padding:9,
      height: 45,
      textAlignVertical: 'top',
      color: '#000',
      borderRadius: 5,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    
      },
    head: {
            textAlign: 'center',
            marginTop: 10,
            paddingTop: 13,
            paddingBottom: 13,
            backgroundColor: '#007361',
            color: '#fff',
            borderRadius: 10,
            fontSize: 18,
            width: 150
          },
    
    container:{
      flex:1,
      backgroundColor: '#eeeeee',
    },
    title:{
      marginTop: 10,
      paddingBottom: 0,
      fontSize: 15,
      textAlign: 'center',
      color: '#000',
    },
    subtitle:{
      marginTop: 10,
      paddingBottom: 0,
      fontSize: 15,
      textAlign: 'center',
      color: '#000',
    },
    resultado:{
      marginTop:30,
      backgroundColor: '#DDD',
      padding:20,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })