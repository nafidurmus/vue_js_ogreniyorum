new Vue({
    el: '#vue-app',  //buradaki girdiğimiz değer index.html deki id değeriyle aynı olmalı.
    data: {
        isim:'',
        yas:''

   
    },
    methods: {
    	isimGir: function(){
            console.log('ismini gir')

        },
        yasGir: function(){
            console.log('yaşını gir')

        }
    	
    }
});

