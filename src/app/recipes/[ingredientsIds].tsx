import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Recipe } from '@/components/Recipe';
import { useEffect, useState } from 'react';
import { services } from '@/services';
import { SearchResultStateProps } from './types';
import { Ingredients } from '@/components/Ingredient';
import { Loading } from '@/components/Loading';

export default function Recipes() {
  const params = useLocalSearchParams<{ ingredientsIds: string }>();
  const ingredientsIds = params.ingredientsIds.split(',');

  const [searchResult, setSearchResult] = useState<SearchResultStateProps>({
    ingredients: [],
    recipes: [],
    loading: true
  });

  useEffect(() => {
    Promise.all([
      services.ingredients.findByIds(ingredientsIds),
      services.recipes.findByIngredientsIds(ingredientsIds)
    ])
      .then(([ingredients, recipes]) =>
        setSearchResult(prevState => ({ ...prevState, ingredients, recipes }))
      )
      .finally(() =>
        setSearchResult(prevState => ({ ...prevState, loading: false }))
      );
  }, []);

  if (searchResult.loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={28}
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Ingredientes</Text>
      </View>
      <Ingredients ingredientsList={searchResult.ingredients} />
      <FlatList
        data={searchResult.recipes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <Recipe
            recipe={item}
            onPress={() => router.navigate(`/recipe/${item.id}`)}
          />
        )}
        showsVerticalScrollIndicator={false}
        style={styles.recipes}
        contentContainerStyle={styles.recipesContent}
        columnWrapperStyle={{ gap: 16 }}
        numColumns={2}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>
            Nenhuma receita encontrada. Escolha outros ingredientes.
          </Text>
        )}
      />
    </View>
  );
}
