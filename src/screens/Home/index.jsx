import { View, Text, Button, TouchableOpacity } from "react-native";
import ButtonVerde from "../Login/style";

export default function Home({navigation}){
    return(
        <View>
            <Text>Home</Text>
            <ButtonVerde onPress={()=> navigation.navigate('Translator')}><Text>Proximo</Text></ButtonVerde>
            <ButtonVerde onPress={()=> navigation.goBack()}><Text>Voltar</Text></ButtonVerde>
            
        </View>
    )
}