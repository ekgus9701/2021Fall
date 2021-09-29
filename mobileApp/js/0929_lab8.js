import React,{useState} from 'react';
import { Text, View, Button,TextInput} from 'react-native';

var text_st = { fontSize: 30, padding: 10, margin: 10 };

var input_st = { fontSize: 30, borderWidth: 1, padding: 10, margin: 10 };

export default function App() {
 
  const [A, setA] = useState(0);
  const [B, setB] = useState(0);
  

  return (
    <View style={{ paddingTop: 30 }}>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={input_st} onChangeText= {setA}/>
        <Text style={text_st}> +</Text>
        <TextInput style={input_st} onChangeText= {setB}/>
        <Text style={text_st}> =   {Number(A) + Number(B)}</Text>
     
      </View>
    </View>
  );
}
