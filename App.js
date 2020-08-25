import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');


function handleSubmit(){
  const alt = altura / 100;
  const imc = peso / (alt * alt);
  
if(imc < 18.6){
  alert('voce esta abaixo do peso ' + imc)
   }
if(imc > 18.6 && imc < 24.9){
  alert('seu peso esta normal ' + imc)
}
if(imc > 24.9 && imc < 29.9){
  alert('voce esta com sobrepeso ' + imc)
}
if(imc > 30 && imc < 34.9){
  alert('voce esta com obesidade grau 1 ' + imc)
}
if(imc > 35 && imc < 39.9){
  alert('voce esta com obesidade com grau 2 ' + imc)
}
if(imc > 40){
  alert('voce esta com obesidade com grau 3 ' + imc)
}
}
  return(
<View style={styles.container}>
  <Text style={styles.title}>Calculadora de IMC</Text>

  <TextInput 
    style={styles.input}
    value={peso}
    onChangeText={ (peso) => setPeso(peso) }
    placeholder="Peso (kg)"
    keyboardType="numeric"
  />
  <TextInput 
    style={styles.input}
    value={altura}
    onChangeText={ (altura) => setAltura(altura) }
    placeholder="Altura (cm)"
    keyboardType="numeric"
  />

  <TouchableOpacity style={styles.botao}
  onPress={handleSubmit}
  >
    <Text style={styles.buttonText}>Calcular</Text>
  </TouchableOpacity>

</View>

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#9400D3'
  },
  title:{
textAlign: 'center',
marginTop: 20,
fontSize:30
  },
input:{
  backgroundColor: '#FFF',
  borderRadius: 10,
  margin: 15,
  padding: 10,
  color: '#FFF',
  fontSize: 23,
},
botao:{
  justifyContent: 'center',
  alignItems: 'center',
  margin: 15,
  backgroundColor: '#FFF',
  padding:10,
},
buttonText:{
  color: '#000',
  fontSize: 25,
}
})