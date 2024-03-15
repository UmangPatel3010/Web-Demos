import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'no-standalone-demo';

  name = "Hathi Vansh";
  city = 'Dubai ni paisa dar palty';
  text = "new text"
  count = 0;
  isDisable = false;
  imgwidth = 100;
  imgpath = "./favicon.ico"
  classes = "btn btn-info mb-2"
  fieldType = "password"
  spi = ""
  faculty = {
    name: "arjun",
    subject: "WT",

  }
  btnClick() {
    this.count++;
  }
  btnIncSize() {
    this.imgwidth += 10;
  }
  btnDesSize() {
    this.imgwidth -= 10;
  }
  btnShow() {
    if (this.fieldType == "password")
      this.fieldType = "text";
    else
      this.fieldType = "password";
  }
}
