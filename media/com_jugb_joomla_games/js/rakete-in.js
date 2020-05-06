
var raketeInParams = {};

function raketeInBeschleunigung(raketeIn) {

	let aktuellePos = parseFloat(raketeIn.style.top);

	raketeInParams['aktuelleGeschwindigkeit'] += raketeInParams['anziehungsKraft'] /100;
	console.log('raketeInParams[\'aktuelleGeschwindigkeit\']',raketeInParams['aktuelleGeschwindigkeit']);

	if (aktuellePos < (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe']) && !raketeInParams['fehler']) {

		let neueHoehe = aktuellePos + (raketeInParams['aktuelleGeschwindigkeit'] /100);
		if (neueHoehe < (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe'])) {
			raketeIn.style.top = (aktuellePos + (raketeInParams['aktuelleGeschwindigkeit'] /100)) + 'px';
		} else {
			raketeIn.style.top = (raketeInParams['unendlichenweitenHoehe'] - raketeInParams['raketeInHoehe']) + 'px';
		}

		window.setTimeout(function () {
			raketeInBeschleunigung(raketeIn);
		}, 10);

	}
}


document.addEventListener( 'DOMContentLoaded', function () {

	var raketeIn = document.getElementById("raketein__raketein");
	raketeIn.style.top = '0px';

	const unendlichenweiten = document.getElementById("raketein__wrap");

	raketeInParams = {
		'unendlichenweitenHoehe'  	: parseFloat(unendlichenweiten.offsetHeight),
		'raketeInHoehe' 			: parseFloat(raketeIn.offsetHeight),
		'treibstoffKapazitaet'		: 10000,
		'treibstoff'				: 10000,
		'anziehungsKraft'			: 9.81,
		'aktuelleGeschwindigkeit'	: 0,
		'fehler'					: ''
	};

	window.addEventListener('resize', function () {
		raketeInParams['unendlichenweitenHoehe'] = parseFloat(unendlichenweiten.offsetHeight);
		raketeInParams['fehler'] = 'Wat veränderste die Fenstergröße du SackIn!';
	});

	raketeInBeschleunigung(raketeIn);

});
