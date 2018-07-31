import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LikeComponent, PowerPipe, FilterPipe, SortPipe, HighlightDirective],
  exports:[ // ensure other modules can use component, directive, pipes
    LikeComponent,
    HighlightDirective
  ]
})
export class SharedModule { 
  
}
