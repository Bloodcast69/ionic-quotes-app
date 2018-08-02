import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  modalText =  {person: '', text: 'string'};
  author: string;
  text: string;

  constructor(
    private viewCtrl: ViewController,
    private navParams: NavParams) { }

    ionViewDidLoad() {
      this.modalText.person = this.navParams.get('person');
      this.modalText.text = this.navParams.get('text');
    }
  onClose(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
