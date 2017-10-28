import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: [
        './section.component.sass'
    ]
})
export class SectionComponent implements OnInit {
    @Input()
    sectionNumber = 1;

    ngOnInit() {}
}
