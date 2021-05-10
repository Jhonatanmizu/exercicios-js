let comparationWithThis = function(param){
	console.log(this === param)
}

comparationWithThis(global)

const obj = {};
comparationWithThis = comparationWithThis.bind(obj)
comparationWithThis(global)
comparationWithThis(obj)
comparationWithThisArrow = (param) => console.log(this === param)
comparationWithThisArrow(global)
comparationWithThisArrow(module.exports)
comparationWithThisArrow = comparationWithThisArrow.bind(obj)
comparationWithThisArrow(obj)