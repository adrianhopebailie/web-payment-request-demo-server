module.exports = {
	index: function *index(next) {
		this.body = "Welcome to koajs-starter";
	},
	
	view: function *index(next) {
		yield this.render('index.ect', {
			title: 'Payment Request API Demo',
			paymentOptions: JSON.stringify([{
		    "unsupportedType": "blah"
		  }, {
		    "@context": "https://schema.org/PaymentChargeSpecification",
		    "appliesToPaymentMethod": "Visa",
		    "price": 100,
		    "priceCurrency": "USD"
		    // Account not specified because this is a pull
		  }, {
		    "@context": "https://schema.org/PaymentChargeSpecification",
		    "appliesToPaymentMethod": "Bitcoin",
		    "price": .5,
		    "priceCurrency": "BTC",
		    "address": "16UwLL9Risc3QfPqBUvKofHmBQ7wMtjvM",
		    "outputs": [
		      ["1Gokm82v6DmtwKEB8AiVhm82hyFSsEvBDK", 15000]
		    ]
		  }])
		});
		yield next;
	},
	
	test: function *(next, id) {
		this.body = "Get param from controller : "+this.params.id;
	}
};