
let raketeInParams = {},
	unendlichenweiten,
	statusHoehe,
	statusGeschwindigkeit,
	statusTreibstoff,
	raketeInTriebwerk1,
	raketeInTriebwerk2,
	raketeInFlamme1,
	raketeInFlamme2;

function raketeInBeschleunigung(raketeIn) {

	let aktuellePos = parseFloat(raketeIn.style.top);

	if (raketeInParams['negativeBeschleunigung'] == 0 || raketeInParams['treibstoff'] < 10) {
		raketeInParams['aktuelleGeschwindigkeit'] += raketeInParams['anziehungsKraft'] / 100;
		console.log('raketeInParams[\'aktuelleGeschwindigkeit\']', raketeInParams['aktuelleGeschwindigkeit']);
	} else {

		let geschwindigkeit = raketeInParams['anziehungsKraft'] /50;
		raketeInParams['treibstoff'] -= 10;

		if (raketeInParams['negativeBeschleunigung'] == 2 && raketeInParams['treibstoff'] >= 10) {
			geschwindigkeit = geschwindigkeit *2;
			raketeInParams['treibstoff'] -= 10;
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
				raketeIn.classList.add('raketeIn--explosion');
			} else {
				alert('You can be my hero babyR');
			}

		}

	}
}


function statusAusgabeIn() {

	statusHoehe.innerHTML = (parseFloat(unendlichenweiten.offsetHeight) - raketeInParams['aktuelleHoehe'] - raketeInParams['raketeInHoehe']).toFixed(2) + ' romPonds';
	statusGeschwindigkeit.innerHTML = raketeInParams['aktuelleGeschwindigkeit'].toFixed(2) + ' quta/s';
	statusTreibstoff.innerHTML = raketeInParams['treibstoff'] + ' galis';

}

function raketenInFlammeIn(staerke) {

	if (raketeInParams['treibstoff'] < 10) {
		staerke = '0';
	}

	raketeInFlamme1.style.opacity = staerke;
	raketeInFlamme2.style.opacity = staerke;
}

document.addEventListener( 'DOMContentLoaded', function () {

	const raketeIn = document.getElementById("raketein__raketein");
	raketeIn.style.top = '0px';

	unendlichenweiten = document.getElementById("raketein__wrap");
	statusHoehe = document.getElementById("status__hoehe");
	statusGeschwindigkeit = document.getElementById("status__geschwindigkeit");
	statusTreibstoff = document.getElementById("status__treibstoff");
	raketeInTriebwerk1 = document.getElementById("raketein__triebwerk1");
	raketeInTriebwerk2 = document.getElementById("raketein__triebwerk2");
	raketeInFlamme1 = document.getElementById("raketein__flamme1");
	raketeInFlamme2 = document.getElementById("raketein__flamme2");

	raketeInParams = {
		'unendlichenweitenHoehe'  	: parseFloat(unendlichenweiten.offsetHeight),
		'raketeInHoehe' 			: parseFloat(raketeIn.offsetHeight),
		'aktuelleHoehe'				: 0,
		'treibstoffKapazitaet'		: parseFloat(unendlichenweiten.offsetHeight) * 10,
		'treibstoff'				: parseFloat(unendlichenweiten.offsetHeight) * 10,
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
				raketenInFlammeIn('0.6');
				break;
			case 39:
				alert('right');
				break;
			case 40:
				alert('down');
				break;
			case 32:
				raketeInParams['negativeBeschleunigung'] = 2;
				raketenInFlammeIn('1');
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
				raketenInFlammeIn('0');
				break;
			case 39:
				alert('right');
				break;
			case 40:
				alert('down');
				break;
			case 32:
				raketeInParams['negativeBeschleunigung'] = 0;
				raketenInFlammeIn('0');
				break;
		}
	}

	raketeInBeschleunigung(raketeIn);

});
