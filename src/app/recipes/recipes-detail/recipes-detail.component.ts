import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { deleteRecipe } from '../../store/recipes.actions';
import { addIngredients } from '../../store/shopping-list.actions';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.store
        .select('recipes')
        .pipe(
          map((recipesState) => {
            return recipesState.recipes.find((recipe, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe((recipe) => (this.recipe = recipe));
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(
      addIngredients({ ingredients: this.recipe.ingredients })
    );
  }

  onEditRecipe() {
    this.router.navigate(['../', this.id, 'edit'], {
      relativeTo: this.route,
    });
  }

  onDeleteRecipe() {
    this.store.dispatch(deleteRecipe({ id: this.id }));
    this.router.navigate(['/recipes']);
  }
}
