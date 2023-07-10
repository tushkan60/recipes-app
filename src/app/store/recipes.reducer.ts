import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../recipes/recipe.model';
import {
  addRecipe,
  deleteRecipe,
  setRecipes,
  storeRecipes,
  updateRecipe,
} from './recipes.actions';

export interface State {
  recipes: Recipe[];
}

const initialState: State = {
  recipes: [],
};

export const recipesReducer = createReducer(
  initialState,
  on(setRecipes, (state, action) => ({
    ...state,
    recipes: [...action.recipes],
  })),
  on(addRecipe, (state, action) => ({
    ...state,
    recipes: [...state.recipes, action.recipe],
  })),
  on(updateRecipe, (state, action) => {
    const updatedRecipes = state.recipes.map((recipe, index) => {
      if (index === action.id) {
        return { ...recipe, ...action.recipe };
      }
      return recipe;
    });

    return {
      ...state,
      recipes: updatedRecipes,
    };
  }),
  on(deleteRecipe, (state, action) => ({
    ...state,
    recipes: state.recipes.filter((recipe, index) => {
      return index !== action.id;
    }),
  })),
  on(storeRecipes, (state) => ({ ...state }))
);
