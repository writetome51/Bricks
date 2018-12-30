import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'builder',
    templateUrl: './builder.component.html',
    styleUrls: ['./builder.component.css']
})


export class BuilderComponent implements OnInit {

    @Input() containers = [
        {tag: 'div'},
        {tag: 'section'},
        {
            tag: 'header', containers: [{}, {}, {containers: [{}]}]
        }
    ];

    highlightedContainerIndex = -1;


    constructor() {
    }


    ngOnInit() {
    }

}
