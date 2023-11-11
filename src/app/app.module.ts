import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { enviroment } from 'src/enviroments/enviroment';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PromptComponent } from './prompt/prompt.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavBarComponent,
    PromptComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideFirestore(() => getFirestore()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
