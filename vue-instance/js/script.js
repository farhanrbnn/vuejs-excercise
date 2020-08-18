window.onload = function() {
	var app = new Vue({
				el: '#root',
				data: {
			    	greeting: 'Hello Vue'
		  		}
			});

	// if statement
	var app2 = new Vue({
		el: '#app2',
		data : {
			count: 0
		}
	})

	// custom html tag
	Vue.component('cat-list', {
		props:['cats'],
		template: `
		<ul>
			<li v-for="cat in cats">{{ cat }}</li>
		</ul>
		`
	})
	// looping and function
	var app3 = new Vue({
		el:'#app3',
		component:[
		'cat-list'
		],
		data: {
			cats: [
			'kitkat',
			'fish',
			'milo'
			], 
			objects: [
			{name:'kitkat'},
			{name:'henry'},
			{name:'milo'},
			], 
			newCat:''
		},
		methods: {
			addCat: function(){
				return this.cats.push(this.newCat)
			}
		}
	})

	

}

