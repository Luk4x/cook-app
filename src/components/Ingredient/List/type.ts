import type { SetStateAction, Dispatch } from 'react';

export type IngredientsProps = {
  selectedIngredients: string[];
  setSelectedIngredients: Dispatch<SetStateAction<string[]>>;
};
