const canvas_width = 100;
const canvas_height = 30;

export const drawGraphCode = (ctx,randomCode) => {
	ctx.clearRect(0, 0, canvas_width, canvas_height);
	const len = randomCode.length;
	for (let i = 0; i < len; i++) {
		let txt = randomCode[i];
		let x = 10 + i * 20;
		let y = 20 + Math.random() * 8;
		drawText(ctx,txt,x,y)
	}
	ctx.draw();
}

//生成随机的验证码
export const generatorRandomCode = (count) => {
	const chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const len = chars.length;
	let array = [];
	for (let i = 0; i < count; i++) {
		let charCode = Math.floor(Math.random() * len);
		let deg = Math.random() - 0.5;
		let txt = chars[charCode];
		array.push(txt)
	}
	return array.join('');
}

//获取随机颜色
export const randomColor = () => {
	let r = Math.floor(Math.random() * 255);
	let g = Math.floor(Math.random() * 255);
	let b = Math.floor(Math.random() * 255);
	return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//绘制文字
export const drawText = (ctx, txt, x, y) => {
	let deg = Math.random() - 0.5; //产生一个随机弧度
	ctx.font = "bold 23px 微软雅黑";
	ctx.translate(x, y);
	ctx.rotate(deg);
	ctx.fillStyle = randomColor();
	ctx.fillText(txt, 0, 0);
	ctx.rotate(-deg);
	ctx.translate(-x, -y);
	drawLine(ctx);
	drawDot(ctx)
}

//验证码上显示线条
export const drawLine = (ctx) => {
	for (var i = 0; i <= 2; i++) { 
		ctx.strokeStyle = randomColor();
		ctx.beginPath();
		ctx.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
		ctx.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
		ctx.stroke();
	}
}

//验证码上显示小点
export const drawDot = (ctx)=>{
	for (var i = 0; i <= 3; i++) {
		ctx.strokeStyle = randomColor();
		ctx.beginPath();
		var x = Math.random() * canvas_width;
		var y = Math.random() * canvas_height;
		ctx.moveTo(x, y);
		ctx.lineTo(x + 1, y + 1);
		ctx.stroke();
	}
}
