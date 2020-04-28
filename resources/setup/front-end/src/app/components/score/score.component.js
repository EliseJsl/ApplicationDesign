// TODO Step 6 import "./score.component.html"

import {Component} from '../../utils/component';
import template from './score.component.html';
import './score.component.css';
import { parseUrl} from '../../utils/utils';
    
    export class ScoreComponent extends Component {
        
        constructor(){
            super('ScoreComponent');
            const params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
        }
        
        init() {
        document.getElementById('name').innerText = this.name;
        document.getElementById('size').innerText = this.size;
        document.getElementById('time').innerText = this.time;
    }

    getTemplate(){
            return template;
        }
    }

    


    
    

