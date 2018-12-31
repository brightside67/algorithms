function add2(...param1: number[]): number {
	let total = 0;
	param1.forEach(num => {
		total += num;
	});

	return total;
}
add2(1, 2, 3, 4, 5);
// console.log(add(3, 2))
