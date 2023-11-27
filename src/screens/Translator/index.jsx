import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Translator({ navigation }) {
  return (
    <View>
      <Text>Translator</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Results')}>
        <Text>Proximo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
