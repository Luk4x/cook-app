import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Redirect, router, useLocalSearchParams } from 'expo-router';

import { services } from '@/services';

import { styles } from './styles';
import { Step } from '@/components/Step';
import { Loading } from '@/components/Loading';
import { Ingredients } from '@/components/Ingredient';
import { RecipeResultStateProps } from './types';

export default function Recipe() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [recipeResult, setRecipeResult] = useState<RecipeResultStateProps>({
    loading: true,
    recipe: null,
    ingredients: [],
    preparations: []
  });

  useEffect(() => {
    Promise.all([
      services.recipes.retrieve(id),
      services.ingredients.findByRecipeId(id),
      services.preparations.findByRecipeId(id)
    ])
      .then(([recipe, ingredients, preparations]) =>
        setRecipeResult(prevState => ({
          ...prevState,
          recipe,
          ingredients,
          preparations
        }))
      )
      .finally(() =>
        setRecipeResult(prevState => ({ ...prevState, loading: false }))
      );
  }, []);

  if (recipeResult.loading) {
    return <Loading />;
  }

  if (!id || !recipeResult.recipe) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipeResult.recipe.image }} style={styles.image} />
      <View style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={28}
            name="arrow-back"
            onPress={() => router.back()}
          />
          <Text style={styles.name}>{recipeResult.recipe.name}</Text>
          <Text style={styles.time}>
            {recipeResult.recipe.minutes} minutos de preparo
          </Text>
        </View>
        <Ingredients
          ingredientsList={recipeResult.ingredients}
          style={{ paddingHorizontal: 16 }}
        />
        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparado</Text>
          <FlatList
            data={recipeResult.preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 16 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
}
