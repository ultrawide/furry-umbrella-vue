var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})

var vm = new Vue({ el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
  },
  computed: {
	  fullName: {
		get: function() {
			return this.firstName + ' ' + this.lastName
		},
		set: function(newValue) {
			var names = newValue.split(' ')
			this.firstName = names[0]
			this.lastName = names[names.length - 1]
	  } // end set
	} // end full name
  }
})

