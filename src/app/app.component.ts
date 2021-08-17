import { Component } from '@angular/core';
import { WindowConfig } from './window-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-ace-primeng';
  public windowsconfigurations :WindowConfig[] = [];
  showDialog() {
    var wincfg = new WindowConfig();
    wincfg.wtitle = "TITLE-"+(this.windowsconfigurations.length+1);
    wincfg.visible = true;
    wincfg.zIndex = this.windowsconfigurations.length+100;
    this.windowsconfigurations.push(wincfg);
  }
}
