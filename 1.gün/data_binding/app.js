new Vue({
    el: '#vue-app',  //buradaki girdiğimiz değer index.html deki id değeriyle aynı olmalı.
    data: {
        name: ' nafi',
        job: 'ögrenci', //geçişlerde "," leri unutma.
        website: 'http://nafidurmus.com',
        websiteTag: '<a href="http://www.nafidurmus.com">nafi durmus</a>'
    },
    methods: {
    	greet: function(time){ // buradaki time methodu index.html den gelir.
    		return 'good ' + time + this.name // good ve time parametresinin birleşiminin ekrana yazar.
    		// this.name ile yukarın çağırma yapabiliriz ayrıca job vb. parametrelerde çağırılabilir. 
    	}
    }
});

