import type { PressableProps } from 'react-native';

export type IngredientProps = {
  name: string;
  image: string;
  selected?: boolean;
} & PressableProps;
