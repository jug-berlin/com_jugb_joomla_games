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


?>

<div class="item_fields">

	<table class="table">
		

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESGAME_NAME'); ?></th>
			<td><?php echo $this->item->name; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESGAME_DESCRIPTION'); ?></th>
			<td><?php echo nl2br($this->item->description); ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESGAME_GAMEIMAGE'); ?></th>
			<td><?php echo $this->item->gameimage; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESGAME_ALIAS'); ?></th>
			<td><?php echo $this->item->alias; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESGAME_PARAMS'); ?></th>
			<td><?php echo $this->item->params; ?></td>
		</tr>

	</table>

</div>

