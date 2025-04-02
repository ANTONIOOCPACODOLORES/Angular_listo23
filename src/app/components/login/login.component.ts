import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>(); // Emite el evento cuando se haga login

  onLogin() {
    console.log("Se logue correctamente");
    this.loginSuccess.emit(); // Emite el evento para que `app.component.ts` muestre la app
  }
}
