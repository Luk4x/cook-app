import { View, Text } from 'react-native';

import { styles } from './styles';
import { Ingredients } from '@/components/Ingredient';
import { useState } from 'react';

export default function Index() {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.titleBreak}>os produtos</Text>
      </Text>
      <Text style={styles.subTitle}>
        Descubra receitas nos produtos que você escolheu.
      </Text>
      <Ingredients {...{ selectedIngredients, setSelectedIngredients }} />
    </View>
  );
}
