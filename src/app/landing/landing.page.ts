import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, LoadingController } from '@ionic/angular';
import { UserService } from '../services/user/user.service';

const TOKEN_KEY = 'auth-token';
@Component({
	selector: 'app-landing',
	templateUrl: './landing.page.html',
	styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

	public loginForm: FormGroup;

	passwordType: string = 'password';
	passwordShown: boolean = false;
	iconDisplay: string = 'eye';

	submitAttempt: boolean = false;
	loginError = false;

	constructor(private storage: Storage, private route: Router, private formBuilder: FormBuilder, private menuCtrl: MenuController, private loading: LoadingController, private auth: UserService) { 
		this.loginForm = formBuilder.group({
			email: ['', {validators: Validators.compose([Validators.required, Validators.email])}],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			insecure: ['cool']
		});
	}

	ngOnInit() {
		this.menuCtrl.enable(false);
	}

	togglePass() {
		if(this.passwordShown) {
			this.passwordShown = false;
			this.passwordType = 'password';
			this.iconDisplay = 'eye';
		} else {
			this.passwordShown = true;
			this.passwordType = 'text';
			this.iconDisplay = 'eye-off';
		}
	}

	async login() {
        this.submitAttempt = true;
        this.loginError = false;
        if(this.loginForm.valid) {
            const loader = await this.loading.create({
				message: 'Please wait...',
      			translucent: true,
			})

            await loader.present();
            
            var data = this.auth.login(this.loginForm.value).then((data:any) => {
                if(data.error) {
                    this.loginError = data.error;
                    loader.dismiss();
                } else {
					loader.dismiss();
                    this.storage.set(TOKEN_KEY, data.cookie).then(res => {
                        this.storage.set('user', data.user).then(res => {
                            this.route.navigateByUrl("/home/maribago");
                        });
                    });
                }
            });
        } else {
            console.log('form is invalid');
        }
    }

}
