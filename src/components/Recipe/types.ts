import type { TouchableOpacityProps } from 'react-native';

export type RecipeProps = TouchableOpacityProps & {
  recipe: {
    name: string;
    image: string;
    minutes: number;
  };
};
