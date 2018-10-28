// вот так работает промис


class Promise {

	constructor(callback) {
		this.state = null;
		callback(this.resolve.bind(this), this.reject.bind(this));
		return this;
	}

	resolve() {
		this.state = 'resolve';
	}

	reject() {
		this.state = 'reject';
	}

	then(result, error) {
		if (this.state === 'resolve') {
			result('it result!!');
			return this;
		} else if (this.state === 'reject') {
			error('it error!!');
			return new Error("error message");
		}
	}

}

const promise = new Promise((resolve, reject) => {
	resolve('is resolved');
});

promise.then(
	result => {
		console.log('result', result);
	},
	error => {
		console.log('error', error);
	}
)
.then(
	result => {
		console.log('result2', result);
	},
	error => {
		console.log('error2', error);
	}
);