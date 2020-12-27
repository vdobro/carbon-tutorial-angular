import { HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

const uri = 'https://api.github.com/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink) {
	return {
		link: httpLink.create({
			uri,
			headers: new HttpHeaders({
				Authorization: `Bearer ${environment.githubToken}`,
			}),
		}),
		cache: new InMemoryCache(),
	};
}
