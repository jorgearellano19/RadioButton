import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { NavController } from 'ionic-angular';
import {ShowPage} from '../show/show'
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public subtitle: string = "";
  prueba: FormGroup;
  gender:string 
  public showPage: ShowPage;
  errors: Array<String> = [];
  cb1: string;
  cb2: string;
  cb3: string;
  cb4: string;
  json: any = {
    name : "",
    email: "",
    date: "",
    edoCivil: "",
    genero: "",
    "intereses": [this.cb1,
    this.cb2,
    this.cb3,
    this.cb4

    ]
  };
  constructor(public navCtrl: NavController,public alert: AlertController, public fb:FormBuilder) {
    this.prueba = fb.group({
      gender:['',Validators.required]
    });
  }



  save(){

    if(this.prueba.get("gender").hasError("required")){
      let showAlert = this.alert.create({
        title: 'There are errors',
      subTitle: 'You must select a gender!',
      buttons: ['OK']
      });
    showAlert.present();
    }
/*    this.errors = [];
    this.subtitle = "";
    if(this.json.name==""){
      this.errors.push("Empty name <br>");
    }
    if(this.json.email==""){
      this.errors.push("Empty e-mail<br>")
    }
    if(this.json.date==""){
      this.errors.push("Empty Date<br>");
    }
    if(this.json.genero==""){
      this.errors.push("Empty genre<br>");
    }
    if(this.json.edoCivil==""){
      this.errors.push("Empty estado civil<br>");
    }
    let x = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
    if(!x.test(this.json.email)){
      this.errors.push("Incorrect format of email<br>");
    }
    if(!(this.errors.length>0))
      this.navCtrl.push(ShowPage,this.json);
    else{
     for(let entry of this.errors){
       this.subtitle+=entry;
     }
      let showAlert = this.alert.create({
        title: 'There are errors',
      subTitle:this.subtitle,
      buttons: ['OK']
      });
    showAlert.present();
  }
  */
  }
}
