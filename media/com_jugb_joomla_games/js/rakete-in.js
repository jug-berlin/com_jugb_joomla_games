
let raketeInParams = {};

function raketeInBeschleunigung(raketeIn) {

	let aktuellePos = parseFloat(raketeIn.style.top);

	if (raketeInParams['negativeBeschleunigung'] == 0) {
		raketeInParams['aktuelleGeschwindigkeit'] += raketeInParams['anziehungsKraft'] / 100;
		console.log('raketeInParams[\'aktuelleGeschwindigkeit\']', raketeInParams['aktuelleGeschwindigkeit']);
	} else {

		let geschwindigkeit = raketeInParams['anziehungsKraft'] /50;
		if (raketeInParams['negativeBeschleunigung'] == 2) {
			geschwindigkeit = geschwindigkeit *2;
		}

		raketeInParams['aktuelleGeschwindigkeit'] -= geschwindigkeit;

	}

	statusAusgabeIn();

	if (aktuellePos < (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe']) && !raketeInParams['fehler']) {

		raketeInParams['aktuelleHoehe'] = aktuellePos + (raketeInParams['aktuelleGeschwindigkeit'] /100);
		if (raketeInParams['aktuelleHoehe'] < (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe'])) {
			raketeIn.style.top = (aktuellePos + (raketeInParams['aktuelleGeschwindigkeit'] /100)) + 'px';
		} else {
			raketeIn.style.top = (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe']) + 'px';
		}

		window.setTimeout(function () {
			raketeInBeschleunigung(raketeIn);
		}, 10);

	} else {

		if (raketeInParams['fehler']) {
			console.log(raketeInParams['fehler']);
		} else {
			if (raketeInParams['aktuelleGeschwindigkeit'] > 10) {
				alert('BOOOOOMMMMMM!!!! Leider alle tot, schade. DU LooserIn!');
			} else {
				alert('You can be my hero babyR');
			}
			alert(raketeInParams['aktuelleGeschwindigkeit']);
		}

	}
}


function statusAusgabeIn() {

	let statusHoehe = document.getElementById("status__hoehe");
	let unendlichenweiten = document.getElementById("raketein__wrap");

	statusHoehe.innerHTML = parseFloat(unendlichenweiten.offsetHeight) - raketeInParams['aktuelleHoehe'] - raketeInParams['raketeInHoehe'];

}

document.addEventListener( 'DOMContentLoaded', function () {

	const raketeIn = document.getElementById("raketein__raketein");
	raketeIn.style.top = '0px';

	const unendlichenweiten = document.getElementById("raketein__wrap");

	raketeInParams = {
		'unendlichenweitenHoehe'  	: parseFloat(unendlichenweiten.offsetHeight),
		'raketeInHoehe' 			: parseFloat(raketeIn.offsetHeight),
		'aktuelleHoehe'				: 0,
		'treibstoffKapazitaet'		: 10000,
		'treibstoff'				: 10000,
		'anziehungsKraft'			: 9.81,
		'aktuelleGeschwindigkeit'	: 0,
		'negativeBeschleunigung'	: 0,
		'fehler'					: ''
	};

	window.addEventListener('resize', function () {
		raketeInParams['unendlichenweitenHoehe'] = parseFloat(unendlichenweiten.offsetHeight);
		raketeInParams['fehler'] = 'Wat veränderste die Fenstergröße du SackIn!';
	});

	document.addEventListener("keydown", TasteGedrueckt );
	document.addEventListener("keyup", TasteLosgelassen);

	function TasteGedrueckt (e) {
		switch (e.keyCode) {
			case 37:
				alert('left');
				break;
			case 38:
				raketeInParams['negativeBeschleunigung'] = 1;
				break;
			case 39:
				alert('right');
				break;
			case 40:
				alert('down');
				break;
			case 32:
				raketeInParams['negativeBeschleunigung'] = 2;
				break;
		}
	}

	function TasteLosgelassen(e) {
		switch (e.keyCode) {
			case 37:
				alert('left');
				break;
			case 38:
				raketeInParams['negativeBeschleunigung'] = 0;
				break;
			case 39:
				alert('right');
				break;
			case 40:
				alert('down');
				break;
			case 32:
				raketeInParams['negativeBeschleunigung'] = 0;
				break;
		}
	}

	raketeInBeschleunigung(raketeIn);

});
