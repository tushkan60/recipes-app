import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { fetchRecipes, setRecipes } from '../store/recipes.actions';
import { Actions, ofType } from '@ngrx/effects';
import { map, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('recipes').pipe(
      take(1),
      map((recipesState) => {
        return recipesState.recipes;
      }),
      switchMap((recipes) => {
        if (recipes.length === 0) {
          this.store.dispatch(fetchRecipes());
          return this.actions$.pipe(ofType(setRecipes), take(1));
        } else {
          return of(recipes);
        }
      })
    );
  }
}
