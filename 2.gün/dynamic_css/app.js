new Vue({
    el: '#vue-app',  //buradaki girdiğimiz değer index.html deki id değeriyle aynı olmalı.
    data: {
        available: false,
        nearly: false

   
    },
    methods: {
      
    	
    	
    },
    computed:{ //consolda bir değeri artarda ne kadar arttırdık onunu saymak için.
       compClasses: function(){
        return{
            available: this.available,
            nearly: this.nearly
        }
       }
    }
});

