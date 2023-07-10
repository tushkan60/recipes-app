import { Actions, createEffect, ofType } from '@ngrx/effects';
import { fetchRecipes, setRecipes, storeRecipes } from './recipes.actions';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { Recipe } from '../recipes/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class RecipesEffects {
  saveRecipes = createEffect(
    () =>
      this.actions$.pipe(
        ofType(storeRecipes),
        withLatestFrom(this.store.select('recipes')),
        switchMap(([actionData, recipesState]) => {
          return this.http.put<Recipe[]>(
            'https://recipes-app-3e541-default-rtdb.firebaseio.com/recipes.json',
            recipesState.recipes
          );
        })
      ),
    { dispatch: false }
  );

  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchRecipes),
      switchMap(() => {
        return this.http.get<Recipe[]>(
          'https://recipes-app-3e541-default-rtdb.firebaseio.com/recipes.json'
        );
      }),
      map((recipes) => {
        if (recipes) {
          return recipes.map((recipe) => ({
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          }));
        } else {
          return [];
        }
      }),
      map((recipes) => {
        return setRecipes({ recipes: recipes });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
