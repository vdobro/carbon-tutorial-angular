import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ApolloClient, InMemoryCache} from '@apollo/client/core';

// carbon-components-angular default imports
import { UIShellModule } from 'carbon-components-angular';
import { Notification20Module } from '@carbon/icons-angular/lib/notification/20';
import { UserAvatar20Module } from '@carbon/icons-angular/lib/user--avatar/20';
import { AppSwitcher20Module } from '@carbon/icons-angular/lib/app-switcher/20';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { environment } from '../environments/environment';
import { createApollo } from './graphql.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		AppRoutingModule,
		UIShellModule,
		Notification20Module,
		UserAvatar20Module,
		AppSwitcher20Module,
		HttpClientModule,
	],
	providers: [
		{
			provide: APOLLO_OPTIONS,
			useFactory(httpLink: HttpLink) {
				return createApollo(httpLink);
			}
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
