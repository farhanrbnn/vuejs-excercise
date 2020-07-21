window.onload = function() {
	var app1 = new Vue({
		el: '#app',
		data: {
			    message: 'Hello Vue'
		  }
	});

	var app2 = new Vue({
		el: '#app-2',
		data: {
			message: 'you loaded this page on' + new Date().toLocaleString()
		}
	});

	var app3 = new Vue({
		el:'#app-3',
		data: {
			seen: true
		}
	});

	var app4 = new Vue({
		el:'#app-4',
		data: {
			todos: [
			{text: 'learn javascript'},
			{text: 'learn javascript'},
			{text: 'learn javascript'}
			]
		}
	});

	var app5 = new Vue({
		el:'#app-5',
		data: {
			message: 'Hello Vue.js'
		},
		methods: {
			reverse: function(){
				this.message = this.message.split('').reverse().join('')
			}
		}
	});

	Vue.component('todo-item', {
		props:['todo'],
		template:'<li>{{todo.text}}</li>'
	});

	var app7 = new Vue({
		el:"#app-7",
		data: {
			groceryList: [
				{id: 0, text:'vegetables'},
				{id: 1, text:'cheese'},
				{id: 2, text:'rice'}
			]
		}
	})

}

