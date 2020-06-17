<?php
/**
 * @version    CVS: 1.0.0
 * @package    Com_Jugb_joomla_games
 * @author      JUG Berlin <info@damiontools.de>
 * @copyright  2020 JUG Berlin
 * @license    GNU General Public License Version 2 oder später; siehe LICENSE.txt
 */
// No direct access
defined('_JEXEC') or die;

use Joomla\CMS\Factory;

$document = Factory::getDocument();

$document->addStyleSheet('media/com_jugb_joomla_games/css/rakete-in.css');
$document->addScript('media/com_jugb_joomla_games/js/rakete-in.js');

?>

<div class="raketein__wrap" id="raketein__wrap">


	<div id="raketein__raketein">
		<div id="raketein__raketein__raketein"></div>
		<div id="raketein__triebwerk1" class="raketein__triebwerk">
			<div id="raketein__flamme1" class="raketein__flamme"></div>
		</div>
		<div id="raketein__triebwerk2" class="raketein__triebwerk">
			<div id="raketein__flamme2" class="raketein__flamme"></div>
		</div>
	</div>

	<div id="status__wrap">
		<dl>
			<dt>Höhe:</dt>
			<dd id="status__hoehe"></dd>
			<dt>Geschwindigkeit:</dt>
			<dd id="status__geschwindigkeit"></dd>
			<dt>Treibstoff:</dt>
			<dd id="status__treibstoff"></dd>
		</dl>
	</div>

</div>
