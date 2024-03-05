import { View, Text } from 'react-native';

import { styles } from './styles';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.titleBreak}>os produtos</Text>
      </Text>
      <Text style={styles.subTitle}>
        Descubra receitas nos produtos que você escolheu.
      </Text>
    </View>
  );
}
