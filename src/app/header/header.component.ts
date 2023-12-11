import { Component } from "@angular/core";
import { TopMenueComponent } from "./top-menu/top-menu.component";
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";

@Component({
    standalone: true,
    imports:[TopMenueComponent, 
        MainMenuComponent, 
        // SearchBarComponent
    ],
    selector: '.app-header',
    // template: '<h3>Header</h3>',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
    // styles: ['a{text-decoration: none; margin:0 10px}', 'button{padding: 10px 20px;}', 
    // '.ekart--header{width: 100%; height: 70px}']
})
export class HeaderComponent {

}