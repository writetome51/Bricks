import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'UIBuilder';
    @Input() brick: any;
    bricks = [{highlighted: false}, {highlighted: false}];
    highlightedBrickIndex = -1;
    Array = Array;


    toggleHighlight(event, brick, index) {
        event.stopPropagation();
        this.highlightedBrickIndex = index;

        brick.highlighted = !brick.highlighted;
    }
}
