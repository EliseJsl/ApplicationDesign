// TODO Step 6 import "./card.component.html"

(function() {   // TODO Step 6 remove this closure

    class CardComponent{
        constructor(id){
            // is this card flipped ?
        this._flipped = false;

        // has the matching card has been discovered already ?
        this.matched = false;

        this._id = id;

        this._elt = document.getElementById('card-template').content.cloneNode(true).firstElementChild;
        this._imageElt = this._elt.querySelector('.card-wrapper');
       
        this._imageElt.querySelector('img.front-face').src = `./card/assets/card-${this._id}.png`;
        this._imageElt.querySelector('img.back-face').src = './card/assets/back.png';
    
        }


        getElement(){
            return this._elt;
        }


        flip() {
            this._imageElt.classList.toggle('flip');
            this._flipped = !this._flipped;
        }


        equals(card) {
            return card._id === this._id;
        }


        get flipped() {
                return this._flipped;
            }

    }

    
    

    const environment = {
        api: {}
    };
    Object.defineProperties(environment.api, {
        host: {
            get:  () => {
                debugger
                throw new Error(atob('VG9vIGJhZCEgV2l0aG91dCBjbG9zdXJlLCBJIGNhbiBjb2xsaWRlIGJ5IG1pc3Rha2VzICB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdGhhdCBoYXZlIGJlZW4gc2V0IGluIGFub3RoZXIgZmlsZQ'));
            }
        }
    });


    // put component in global scope, tu be runnable right from the HTML.
    // TODO Step 6 export CardComponent
    window.CardComponent = CardComponent;
})();
