import { View, Text, Alert } from 'react-native';

import { styles } from './styles';
import { Ingredients } from '@/components/Ingredient';
import { Modal } from '@/components/Modal';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { services } from '@/services';

import { IngredientStateProps } from './types';
import { Loading } from '@/components/Loading';

export default function Index() {
  const [ingredients, setIngredients] = useState<IngredientStateProps>({
    all: [],
    selectedIds: [],
    loading: true
  });

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(allIngredients =>
        setIngredients(prevState => ({ ...prevState, all: allIngredients }))
      )
      .finally(() =>
        setIngredients(prevState => ({ ...prevState, loading: false }))
      );
  }, []);

  const handleClearSelectedIngredients = () => {
    Alert.alert('Limpar', 'Deseja limpar tudo?', [
      { text: 'Não', style: 'cancel' },
      {
        text: 'Sim',
        onPress: () =>
          setIngredients(prevState => ({ ...prevState, selectedIds: [] }))
      }
    ]);
  };

  const handleIngredientSelection = (selectedIngredientsIds: string[]) =>
    setIngredients(prevState => ({
      ...prevState,
      selectedIds: selectedIngredientsIds
    }));

  const modalButton = {
    title: 'Encontrar',
    onPress: () => router.navigate(`/recipes/${ingredients.selectedIds}`)
  };

  if (ingredients.loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {'\n'}
        <Text style={styles.titleBreak}>os produtos</Text>
      </Text>
      <Text style={styles.subTitle}>
        Descubra receitas nos produtos que você escolheu.
      </Text>
      <Ingredients
        ingredientsList={ingredients.all}
        selectedIngredients={ingredients.selectedIds}
        onSelectIngredient={handleIngredientSelection}
        style={{ paddingBottom: ingredients.selectedIds.length > 0 ? 200 : 0 }}
      />
      {ingredients.selectedIds.length > 0 && (
        <Modal
          message={`${ingredients.selectedIds.length} ingredientes selecionados`}
          onClose={handleClearSelectedIngredients}
          button={modalButton}
        />
      )}
    </View>
  );
}
