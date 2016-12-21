( function ( document, window, index ) {
	var inputs = document.querySelectorAll( '.inputfile' );
	var countSpan = document.querySelector('.submit-group span');
	countSpan.innerHTML = '0';

	Array.prototype.forEach.call( inputs, function( input ) {
		var label    = input.nextElementSibling,
		countFile = input.parentElement.previousElementSibling,
		labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e ) {
			var fileName = '';
			if( this.files && this.files.length >= 1 ){
				var form = $(this).parents('form');
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
				var arr = [];
				for (var i = 0; i < this.files.length; i += 1) {
					var count = $('<span>'+ (i + 1) +'</span>');
					arr.push(count);
				}
				countSpan.innerHTML = this.files.length;
				$(countFile).html(arr);


			}
			else {
				arr = [];
				fileName = e.target.value.split( '\\' ).pop();
				countFile.innerHTML = '';
				countSpan.innerHTML = '0';

			}

			if( fileName ) {
				label.classList.add('has-file');
			}

			else {
				arr = [];
				label.innerHTML = labelVal;
				label.classList.remove('has-file');
				countFile.innerHTML = '';
				countSpan.innerHTML = '0';

			}

		});

		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));