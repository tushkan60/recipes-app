import { createAction, props } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';

export const addIngredient = createAction(
  '[ShoppingList] AddIngredient',
  props<{ ingredient: Ingredient }>()
);

export const addIngredients = createAction(
  '[ShoppingList] AddIngredients',
  props<{ ingredients: Ingredient[] }>()
);

export const updateIngredient = createAction(
  '[ShoppingList] UpdateIngredients',
  props<{ ingredient: Ingredient }>()
);

export const deleteIngredient = createAction(
  '[ShoppingList] DeleteIngredients'
);

export const startEdit = createAction(
  '[ShoppingList] StartEdit',
  props<{ id: number }>()
);
export const stopEdit = createAction('[ShoppingList] StopEdit');
