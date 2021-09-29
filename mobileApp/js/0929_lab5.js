import React,{useState} from 'react';
import { Text, View, Button,TextInput} from 'react-native';

var text_st = { fontSize: 30, backgroundColor: 'lightgray', padding: 10, margin: 10 };

export default function App() {
 
  const [val,setval] = useState(0);

 

  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={text_st}> {val}</Text>

      <View style={{ margin: 20 }}>
        <Button title="Count Up"
          onPress={function () { setval(val+1)}} />
        <View style={{ height: 10 }}></View>
        <Button title="Count Down"
        onPress={function(){setval(val-1)}}/>
      </View>
    </View>
  );
}
