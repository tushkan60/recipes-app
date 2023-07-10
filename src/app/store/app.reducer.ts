import * as fromShoppingList from '../store/shopping-list.reducer';
import * as fromAuth from '../store/auth.reducer';
import * as fromRecipes from '../store/recipes.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  shoppingList: fromShoppingList.State;
  auth: fromAuth.State;
  recipes: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipes: fromRecipes.recipesReducer,
};
