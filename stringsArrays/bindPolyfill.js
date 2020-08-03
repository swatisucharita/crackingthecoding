Function.prototype.bind = function (context, ...args) {
    const fun = this;
    if (typeof fun === "function") {
        return function() {fun.apply(context, args);}
    }
}