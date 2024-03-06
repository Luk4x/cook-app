import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '../Component';
import { IngredientsProps } from './type';

function Ingredients({
  selectedIngredients,
  setSelectedIngredients
}: IngredientsProps) {
  const handleSelection = (value: string) => {
    setSelectedIngredients(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(ingredient => ingredient !== value);
      }

      return [...prevState, value];
    });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {Array.from({ length: 100 }, (_, i) => i).map(i => (
        <Ingredient
          key={i}
          name="Maça"
          image={require('@/assets/apple.png')}
          selected={selectedIngredients.includes(i.toString())}
          onPress={() => handleSelection(i.toString())}
        />
      ))}
    </ScrollView>
  );
}

export { Ingredients, IngredientsProps };
