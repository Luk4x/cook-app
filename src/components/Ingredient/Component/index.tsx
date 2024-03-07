import { Image, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { IngredientProps } from './types';

function Ingredient({
  name,
  image,
  selected = false,
  ...rest
}: IngredientProps) {
  return (
    <Pressable
      style={[styles.container, selected && styles.selected]}
      {...rest}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
}

export { Ingredient, IngredientProps };
