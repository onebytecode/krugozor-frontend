import { SectionComponent } from './section.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SectionComponent
    ],
    exports: [
        SectionComponent
    ]
})
export class SectionModule {}
