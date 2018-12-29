import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.css']
})


export class BuilderComponent implements OnInit {

    title = 'UIBuilder';
    @Input() containers = [
        {}, {}, {containers: [{}, {}, {containers: [{}]}]}
    ];

    highlightedContainerIndex = -1;


    constructor() {
    }


    ngOnInit() {
    }

}
