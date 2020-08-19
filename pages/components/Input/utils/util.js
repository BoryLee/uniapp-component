export const addZero = number => number < 10 ? `0${number}` : number;

export const dateToDateArray = (date)=>{
	const year = date.getFullYear();
	const month = date.getMonth()+1;
	const day = date.getDate();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	return [String(year),String(addZero(month)),String(addZero(day)),String(addZero(hour)),String(addZero(minute)),String(addZero(second))];
}