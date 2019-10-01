 var names = ['Matthew', 'Mark', 'Luke', 'John'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// names.forEach((name)=>{
// 	console.log('arrowFunc',name)
// });

// names.forEach((name) => console.log(name));

var returnMe = (name) => name + "!";
console.log(returnMe('Onyemobi'));

var person = {
	name: 'Onyemobi',
	greet: function(){
		names.forEach((name) => {
			console.log(this.name + ' says hi to ' + name)
		})
	}
};

person.greet();

var returnSum = (a,b) => a + b;
console.log(returnSum(5,50));