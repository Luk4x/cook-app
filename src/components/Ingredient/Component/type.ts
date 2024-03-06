import type { ImageProps, PressableProps } from 'react-native';

export type IngredientProps = {
  name: string;
  image: ImageProps;
  selected?: boolean;
} & PressableProps;
