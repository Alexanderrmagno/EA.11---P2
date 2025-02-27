import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-password-forgot',
  templateUrl: './password-forgot.page.html',
  styleUrls: ['./password-forgot.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PasswordForgotPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
