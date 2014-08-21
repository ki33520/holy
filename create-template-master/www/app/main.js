define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var str = 'HF90（BEV190系统替换滤芯）0.2微米,VH3/CC350';
			var r = str.replace(/\,/g, '\n');
			$('#txt').html(r);
			console.log(r)
    var messages = require('./messages');

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');

    print(messages.getHello('hello'));

});
