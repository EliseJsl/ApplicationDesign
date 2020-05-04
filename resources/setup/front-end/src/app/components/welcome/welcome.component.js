// TODO Step 6 import "./welcome.component.html"

import {Component} from '../../utils/component';
import template from './welcome.component.html';
import './welcome.component.scss';
    
    export class WelcomeComponent extends Component {
        constructor(){
            super('WelcomeComponent');
        }


       
       init() {
        const form = document.querySelector('form.form-signin');

        form.addEventListener('submit', (event) =>{     

            event.preventDefault();
            if (form.checkValidity() === false) {
                event.stopPropagation();
                form.classList.add('was-validated');
            } else {
                const name = event.srcElement.querySelector('#nickname').value;
                const size = parseInt(event.srcElement.querySelector('#size').value);

                _startGame(name, size);
            }
        }, false);

        return this;
    }

    getTemplate(){
            return template;
        }

    

    
    }
    
    // TODO Step 6 implement getTemplate() {}
    function _startGame(name, size) {
        window.location.hash = `game?name=${name}=name&size=${size}`;
    } 

    
    
