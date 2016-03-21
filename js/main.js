var num = parseInt( prompt('Введите число', '') );
	if( num >= 0 || num <= 0 ) {
		var exponent = parseInt( prompt('Возвести число в степень', '') );
			if ( exponent >= 0 || exponent <= 0 ) {
				// Возведение в степень

				var rezult = num;
				for ( var i = exponent; i > 1; i-- ) {
					rezult *= num;
				}


			} else {
				alert('Введите целое число');
			};


	} else {
		alert('Введите целое число');

	}


console.log(rezult);
