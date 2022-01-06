import React, { useState, useContext, useEffect } from 'react';
import { Text,Button, SafeAreaView, View, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';


export function Home({ navigation }) {


  function dolar() {
   
      return navigation.navigate("Dolar")
     }

     function euro() {
   
      return navigation.navigate("Euro")
     }

  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          <View style={styles.home}>
           
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={dolar} >
                <Text style={styles.head}>Real para Dolar</Text>
              </TouchableOpacity>

              <TouchableOpacity  onPress={euro}>
                <Text style={styles.head}>Real para Euro</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cliNome: {
    padding: 8,
    borderRadius: 10,
    borderColor: '#007361',
    borderWidth: 3,
    fontSize: 16
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
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,

  },

  container2: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  home: {
    marginTop: '20%',
    width: '80%',

  },
  title: {
    marginTop: 10,
    paddingBottom: 0,
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    color: '#000',
  },
})

export default Home.js;