new Vue({
    el: '#vue-app',  //buradaki girdiğimiz değer index.html deki id değeriyle aynı olmalı.
    data: {
        yas:20,
        a: 0,
        b: 0

   
    },
    methods: {
       /* aArttır: function() {
            console.log('aArttır');
            return this.a + this.yas;
        },
        bArttır: function() {
            console.log('bArttır');
            return this.b + this.yas;
        }*/
    	
    	
    },
    computed:{ //consolda bir değeri artarda ne kadar arttırdık onunu saymak için.
        aArttır: function() {
            console.log('aArttır');
            return this.a + this.yas;
        },
        bArttır: function() {
            console.log('bArttır');
            return this.b + this.yas;
        }
    }
});

