import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {GetvaluePage} from '../getvalue/getvalue';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public storage:Storage) {
    storage.ready().then(()=>{
    storage.set("Username", "Krisana.t");
    storage.set("StudentId", "6042040901");
    });
  }

  goToGetvalue(){
    this.navCtrl.push(GetvaluePage);
  }

}
