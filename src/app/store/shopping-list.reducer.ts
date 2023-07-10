import { createReducer, on } from '@ngrx/store';
import { Ingredient } from '../shared/ingredient.model';
import {
  addIngredient,
  addIngredients,
  deleteIngredient,
  startEdit,
  stopEdit,
  updateIngredient,
} from './shopping-list.actions';

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new Ingredient('apples', 5), new Ingredient('tomatoes', 2)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(addIngredient, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, action.ingredient],
  })),
  on(addIngredients, (state, action) => ({
    ...state,
    ingredients: [...state.ingredients, ...action.ingredients],
  })),
  on(updateIngredient, (state, action) => {
    const updatedIngredients = state.ingredients.map((ingredient, index) => {
      if (index === state.editedIngredientIndex) {
        return action.ingredient;
      } else {
        return ingredient;
      }
    });
    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredientIndex: -1,
      editedIngredient: null,
    };
  }),
  on(deleteIngredient, (state) => {
    const updatedIngredients = state.ingredients.filter(
      (ingredient, index) => index !== state.editedIngredientIndex
    );
    return {
      ...state,
      ingredients: updatedIngredients,
      editedIngredientIndex: -1,
      editedIngredient: null,
    };
  }),
  on(startEdit, (state, action) => {
    return {
      ...state,
      editedIngredientIndex: action.id,
      editedIngredient: { ...state.ingredients[action.id] },
    };
  }),
  on(stopEdit, (state) => {
    return {
      ...state,
      editedIngredientIndex: -1,
      editedIngredient: null,
    };
  })
);
