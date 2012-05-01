Function.prototype.curry = function() {
        if (arguments.length < 1) {
                return this;
        }
        var method = this;
        var args = $.makeArray(arguments);
        return function() {
                return method.apply(this, args.concat($.makeArray(arguments)));
        };
};
Function.prototype.curryAndApply = function(context) {
        if (arguments.length < 2) {
                return this;
        }
        var method = this;
        var args = $.makeArray(arguments);
        return function() {
		return method.apply(context, args.slice(1).concat($.makeArray(arguments)));
	};
};

//C# string format style
String.prototype.format = function() {
var args = arguments;
	return this.replace(/{(\d+)}/g, function(match, number) { 
		return typeof args[number] != 'undefined'
		? args[number]
		: match;
	});
};
