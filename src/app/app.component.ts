import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CoreAngularClass';
status=false;
allow = false;

constructor()
{
setTimeout( ()=>{
this.allow=true;
},5000);

}

onButtonClick()
{
  
  if(this.status)
  {
    this.status=false;
  }
  else
  {
    this.status=true;
  }
  
}




}
