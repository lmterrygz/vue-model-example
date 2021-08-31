const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con VUE',
        frutas: [{
                nombre: 'manzanas',
                cantidad: 10
            },
            {
                nombre: 'peras',
                cantidad: 0
            },
            {
                nombre: 'platanos',
                cantidad: 5
            }
        ],
        nuevaFruta: '',
        total: 0
    },

    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta,
                cantidad: 0
            });
            this.nuevaFruta = '';
        }


    },
    computed: {
totalFrutas(){
this.total=0;
for(fruta of this.frutas){
    this.total= this.total + fruta.cantidad;
}
return this.total;
}
    }

})