import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { AppModule } from '../app.module';
import { DropdownDirective } from '../shared/dropdown.directive';
import { RecipesStartComponent } from './recipes-start/recipes-start.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesEditComponent,
    DropdownDirective,
    RecipesItemComponent,
    RecipesStartComponent,
  ],
  imports: [AppRoutingModule, ReactiveFormsModule, CommonModule],
  exports: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesEditComponent,
    RecipesItemComponent,
    DropdownDirective,
  ],
})
export class RecipesModule {}
