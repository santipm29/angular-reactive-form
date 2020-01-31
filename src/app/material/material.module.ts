import {
  NgModule
} from '@angular/core';

import {
  NoopAnimationsModule
} from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    NoopAnimationsModule
  ]
})
export class MaterialModule {}
