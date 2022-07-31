import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DogBreedDropdownComponent } from './components/dropdown/dog-breed-dropdown/dog-breed-dropdown.component';
import { DogsComponent } from './dogs/dogs.component';
import { ViewImagesButtonComponent } from './components/button/view-images-button/view-images-button.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './body/body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DogBreedDropdownComponent,
    DogsComponent,
    ViewImagesButtonComponent,
    HeaderComponent,
    BodyComponent,
  ],
  imports: [
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
