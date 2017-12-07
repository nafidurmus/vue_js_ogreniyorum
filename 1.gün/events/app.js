new Vue({
    el: '#vue-app',  //buradaki girdiğimiz değer index.html deki id değeriyle aynı olmalı.
    data: {
        age: 21,
        x: 0,
        y: 0
    },
    methods: {
    	ekle: function(inc){
            this.age += inc;
        },
        cikar: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            //console.log(event);
            this.x = event.offsetX; //x ve y değerlerini güncelliyoruz bu metotla.
            this.y = event.offsetY;

        }
    	
    }
});

