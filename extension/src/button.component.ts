import {
    Input,
    Component,
    Output,
    EventEmitter,
} from '@angular/core';

@Component({
    selector: 'custom-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'
    ],
})
export class ButtonComponent {
    @Input() label = 'default label';
    @Output() action = new EventEmitter<number>();
    private clicksCt = 0;
    textStuff = 'Some Other Text';

    constructor() {}

    handleClick() {
        this.clicksCt++;
        this.action.emit(this.clicksCt);
        this.textStuff = 'Clicks:' + this.clicksCt;
    }
}
