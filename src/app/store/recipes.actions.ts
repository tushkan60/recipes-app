import { createAction, props } from '@ngrx/store';
import { Recipe } from '../recipes/recipe.model';

export const setRecipes = createAction(
  '[recipes] SetRecipes',
  props<{ recipes: Recipe[] }>()
);

export const fetchRecipes = createAction('[recipes] FetchRecipes');

export const addRecipe = createAction(
  '[recipes] AddRecipe',
  props<{ recipe: Recipe }>()
);

export const updateRecipe = createAction(
  '[recipes] UpdateRecipe',
  props<{ id: number; recipe: Recipe }>()
);

export const deleteRecipe = createAction(
  '[recipes] DeleteRecipe',
  props<{ id: number }>()
);

export const storeRecipes = createAction('[recipes] StoreRecipes');
