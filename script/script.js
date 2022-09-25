Vue.createApp({
    data(){
        return{
            cards:[
                {},
                {},
                {
                    src: 'https://picsum.photos/id/100/100/100',
                    title: 'Title1',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {},
                {}
            ],

            arrMinSize: 0,
            arrMaxSize: 5,
            nCardsToAdd: 1,
            selectedColor: "#ffedd5"
        }
    },

    methods:{
       next(){
            this.arrMinSize += 1;
            this.arrMaxSize += 1;
        },
       
        prev(){
            this.arrMinSize -= 1;
            this.arrMaxSize -= 1;
        },

        // ritorna numero = index ultimo elemento di cards
        // serve per disabilitare funzionamento btn next quando si raggiunge la fine dell'array cards
        getArrayLimit(){
            return this.cards.length;
        },

        // ritona un array con i soli quattro elementi da mostrare 
        getActiveArray() {
            return this.cards.slice(this.arrMinSize, this.arrMaxSize);
        },

        // cumulativo
        // addCard(){
        //     const newCard = {
        //         src: 'https://picsum.photos/id/241/100/100',
        //         title: 'Title',
        //         text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
        //     };

        //     for (let i = 0; i <= this.nCardsToAdd; i++) {
        //         this.cards.splice(this.getArrayLimit() - 2, 0, newCard)
        //     }
        //     console.log(this.nCardsToAdd)
        // }

        // Aggiunta card dinamica a numero fisso
        addCard(){
            this.cards.splice(2, this.getArrayLimit() - 4);

            let y = 100
            for (let i = 0; i <= this.nCardsToAdd - 1; i++) {
                const newCard = {
                    src: 'https://picsum.photos/id/'+ y++ +'/100/100',
                    title: 'Title',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                };

                this.cards.splice(this.getArrayLimit() - 2, 0, newCard)
            }
            console.log(this.nCardsToAdd)
        },

        selectCard(index){
            this.arrMinSize = index;
            this.arrMaxSize = index + 5;
        }

    },
})
.mount('#app')