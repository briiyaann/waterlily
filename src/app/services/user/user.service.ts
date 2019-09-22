import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	baseUrl = environment.baseUrl;

	constructor(private http: HttpClient) { }

	async login(data) {
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let query_string = '';
		let count = 1;
		for (let i in data) {
			let value = data[i];

			query_string += i + '=' + value + '&';

			count++;
		}

		query_string = query_string.substring(0, query_string.length - 1);

		let loggedin = await this.http.post(`${this.baseUrl}user/generate_auth_cookie?` + query_string, data).toPromise();
		
		return loggedin;
	}

	async register(data) {
		const httpOptions = {
			headers: new HttpHeaders({
			  'Content-Type':  'application/json',
			  'Access-Control-Allow-Headers': 'Content-Type'
			})
		};

		let query_string = '';
		let count = 1;
		for (let i in data) {
			let value = data[i];

			query_string += i + '=' + value + '&';

			count++;
		}

		query_string = query_string.substring(0, query_string.length - 1);

		let register = await this.http.post(`${this.baseUrl}user/register?notify=no&` + query_string, data).toPromise();
		
		return register;
	}

	async get_nonce() {
		let nonce = await this.http.get(`${this.baseUrl}get_nonce?controller=user&method=register`).toPromise();

		return nonce;
	}
}
