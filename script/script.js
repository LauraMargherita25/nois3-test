Vue.createApp({
    data(){
        return{
            cards:[
                {},
                {},
                {
                    src: 'https://picsum.photos/id/237/100/100',
                    title: 'Title1',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {
                    src: 'https://picsum.photos/id/238/100/100',
                    title: 'Title2',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {
                    src: 'https://picsum.photos/id/239/100/100',
                    title: 'Title3',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {
                    src: 'https://picsum.photos/id/240/100/100',
                    title: 'Title4',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {
                    src: 'https://picsum.photos/id/241/100/100',
                    title: 'Title5',
                    text: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
                },
                {},
                {}
            ],

            // cardIndex: "", //card con focus
            arrMinSize: 0,
            arrMaxSize: 5,
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
      
        // getCardIndex(card){
        //     // const ci = this.cards.indexOf(card);
        //     // this.cardIndex = this.cards.indexOf(ci)
        //     this.cardIndex = card;
        //     console.log(card)
        // },

    },
})
.mount('#app')