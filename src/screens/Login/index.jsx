import { View, Text } from 'react-native';
import * as React from 'react';
import ButtonVerde from './style';

export default function Login({ navigation }) {
  return (
    <View>
      <View>
        <Text>VERBALIZA</Text>
      </View>

      <ButtonVerde onPress={() => navigation.navigate('Home')}>
        <Text>Entrar</Text>
      </ButtonVerde>
    </View>
  );
}
