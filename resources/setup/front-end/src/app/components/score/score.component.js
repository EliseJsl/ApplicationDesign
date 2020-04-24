// TODO Step 6 import "./score.component.html"

(function() {      // TODO Step 6 remove this closure

    /* class ScoreComponent constructor */
    class ScoreComponent {
        constructor(){
            let params = parseUrl();
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
        }

        init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
        }
        
    }
    // TODO Step 6 implement getTemplate() {}

    function parseUrl() {
        let url = window.location;
        let query = url.href.split('?')[1] || '';
        let delimiter = '&';
        let result = {};
        let parts = query
            .split(delimiter);

        parts
        .map( i => {
            kv=i.split('=');
            kv.reduce( (nom , size, time) => {
                console.log(nom + " " + size )
                result[nom]= size;
            })
        })
        return result;
    }

    // put component in global scope, tu be runnable right from the HTML.
    // TODO Step 6 export ScoreComponent
    window.ScoreComponent = ScoreComponent;
})();
