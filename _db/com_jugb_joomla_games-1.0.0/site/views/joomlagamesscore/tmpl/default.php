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
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESSCORE_USERNAME'); ?></th>
			<td><?php echo $this->item->username; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESSCORE_POINTS'); ?></th>
			<td><?php echo $this->item->points; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESSCORE_UID'); ?></th>
			<td><?php echo $this->item->uid; ?></td>
		</tr>

		<tr>
			<th><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FORM_LBL_JOOMLAGAMESSCORE_GID'); ?></th>
			<td><?php echo $this->item->gid; ?></td>
		</tr>

	</table>

</div>

