import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ButtonComponent } from './button.component';
import { ButtonTextComponent } from './buttonText.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [ButtonComponent, ButtonTextComponent],
    entryComponents: [ButtonComponent, ButtonTextComponent],
    providers: [
        {
            provide: 'widgets',
            useValue: [
                {
                    name: 'custom-button',
                    component: ButtonComponent
                }
            ],
            multi: true
        }
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export default class ModuleA {

}