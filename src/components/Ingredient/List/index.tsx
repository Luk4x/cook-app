import { ScrollView } from 'react-native';
import { styles } from './styles';
import { Ingredient } from '../Component';
import { IngredientsProps } from './types';
import { services } from '@/services';

function Ingredients({
  ingredientsList,
  selectedIngredients,
  onSelectIngredient,
  ...rest
}: IngredientsProps) {
  const handleSelection = (value: string) => {
    if (selectedIngredients && onSelectIngredient) {
      if (selectedIngredients.includes(value)) {
        onSelectIngredient(
          selectedIngredients.filter(ingredient => ingredient !== value)
        );

        return;
      }

      onSelectIngredient([...selectedIngredients, value]);
    }
  };

  return (
    <ScrollView
      {...rest}
      contentContainerStyle={[styles.container, rest?.style]}
      showsVerticalScrollIndicator={false}
    >
      {ingredientsList.length > 0 &&
        ingredientsList.map(({ id, image, name }) => (
          <Ingredient
            key={id}
            name={name}
            image={`${services.storage.imagePath}/${image}`}
            selected={selectedIngredients?.includes(id)}
            onPress={() => handleSelection(id)}
          />
        ))}
    </ScrollView>
  );
}

export { Ingredients, IngredientsProps };
