import type { ScrollViewProps } from 'react-native';

export type IngredientsProps = {
  ingredientsList: IngredientResponse[];
  onSelectIngredient?: (selectedIngredientsIds: string[]) => void;
  selectedIngredients?: string[];
} & ScrollViewProps;
