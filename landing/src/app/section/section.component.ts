import { Component, Input } from '@angular/core'

import { Section } from './section'

@Component({
    selector: 'section-component',
    templateUrl: './section.component.html',
    styleUrls: [
        './section.component.css'
    ]
}) 
export class SectionComponent {
    @Input() 
    section: Section 

    constructor() {
        
    }
}