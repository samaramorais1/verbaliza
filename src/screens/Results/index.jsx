import { View, Text, TouchableOpacity } from "react-native";

export default function Results({navigation}){
    return(
        <View>
            <Text>Results</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text>Voltar p/ tela inicial</Text></TouchableOpacity>
            
        </View>
    )
}