/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export function convertBytesToHuman(bytes) {
  // your solution goes here

  if(Number.isInteger(bytes) && (bytes >= 0)){

  	if(bytes == 0){
  		return '0 B';
  	}

  	let p = Math.floor(Math.log(bytes) / Math.log(1024));
  	return Math.round((bytes/Math.pow(1024, p))*100)/100 + ' ' + ' KMGTP'.charAt(p) + 'B';
  }
  else{
  	return false;
  }

}
