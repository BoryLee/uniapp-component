//由一个组件，向上找到最近的指定组件
export const findComponentUpward = (context, componentName) => {
	let parent = context.$parent;
	let name = parent.$options.name;
	while (parent) {
		if (name === componentName) {
			break;
		}
		parent = parent.$parent;
	}
	return parent;
}

//由一个组件，向上找到所有的指定组件
export const findComponentsUpward = (context, componentName) => {
	let parents = [];
	let parent = context.$parent;
	if (parent) {
		if (parent.$options.name === componentName) {
			parents.push(parent)
		}
		return parents.concat(findComponentsUpward(parent, componentName));
	} else {
		return [];
	}
}

//由一个组件，向下找到最近的指定组件
export const findComponentDownward = (context, componentName) => {
	let childrens = context.$children;
	let children = null;
	if (childrens.length) {
		childrens.forEach(child => {
			if (child.$options.name === componentName) {
				children = child;
				break;
			} else {
				children = findComponentDownward(child, componentName);
				if (children) break;
			}
		})
	}
	return children;
}

//由一个组件，向下找到所有的指定组件
export const findComponentsDownward = (context, componentName) => {
	return context.$children.reduce((components, child) => {
		if (child.$options.name === componentName) components.push(child);
		return components.concat(findComponentDownward(child, componentName))
	}, []);
}

//由一个组件，找到指定组件的兄弟组件
export const findBrothersComponents = (context, componentName, exceptMe = true) => {
	let res = context.$parent.$children.filter(child => child.$options.name === componentName);
	if (exceptMe) {
		let index = res.findIndex(item => item._uid === context._uid);
		res.splice(index, 1);
	}
	return res;
}

//类型数据判断
export const typeOf = (obj) => {
	const map = {
		'[object Boolean]': 'boolean',
		'[object Number]': 'number',
		'[object String]': 'string',
		'[object Function]': 'function',
		'[object Array]': 'array',
		'[object Date]': 'date',
		'[object RegExp]': 'regexp',
		'[object Undefined]': 'undefined',
		'[object Null]': 'null',
		'[object Object]': 'object'
	};
	const toString = Object.prototype.toString;
	return map[toString(obj)];
}

//深拷贝
export const deepCopy = (data) => {
	const type = typeOf(data);
	let result;
	if(type === 'array'){
		result = [];
	}else if(type === 'object'){
		result = {};
	}else{
		return data;
	}
	
	if(type === 'array'){
		data.forEach(item => {
			result.push(deepCopy(item));
		})
	}else if(type === 'object'){
		for(let key in data){
			result[key] = deepCopy(data[key]);
		}
	}
	return result;
}
