import { Component } from '@angular/core'

import '../assets/css/styles.css'

import { Section } from './section/section'

class BaseSection implements Section {
    text: string 
    color: string 
    constructor(text: string, color: string) {
        this.text = text
        this.color = color 
    }
}

@Component({
    selector:    'my-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
}) export class AppComponent {
    sections = [
        new BaseSection('First section', 'blue'),
        new BaseSection('Second Section', 'red')
    ]
}