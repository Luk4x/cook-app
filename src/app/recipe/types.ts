export type RecipeResultStateProps = {
  loading: boolean;
  recipe: RecipeResponse | null;
  ingredients: IngredientResponse[];
  preparations: PreparationsResponse[];
};
