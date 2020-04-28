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

use \Joomla\CMS\HTML\HTMLHelper;
use \Joomla\CMS\Factory;
use \Joomla\CMS\Uri\Uri;
use \Joomla\CMS\Router\Route;
use \Joomla\CMS\Language\Text;


HTMLHelper::addIncludePath(JPATH_COMPONENT . '/helpers/html');
HTMLHelper::_('behavior.tooltip');
HTMLHelper::_('behavior.formvalidation');
HTMLHelper::_('formbehavior.chosen', 'select');
HTMLHelper::_('behavior.keepalive');

// Import CSS
$document = Factory::getDocument();
$document->addStyleSheet(Uri::root() . 'media/com_jugb_joomla_games/css/form.css');
?>
<script type="text/javascript">
	js = jQuery.noConflict();
	js(document).ready(function () {
		
	js('input:hidden.uid').each(function(){
		var name = js(this).attr('name');
		if(name.indexOf('uidhidden')){
			js('#jform_uid option[value="'+js(this).val()+'"]').attr('selected',true);
		}
	});
	js("#jform_uid").trigger("liszt:updated");
	js('input:hidden.gid').each(function(){
		var name = js(this).attr('name');
		if(name.indexOf('gidhidden')){
			js('#jform_gid option[value="'+js(this).val()+'"]').attr('selected',true);
		}
	});
	js("#jform_gid").trigger("liszt:updated");
	});

	Joomla.submitbutton = function (task) {
		if (task == 'joomlagamesscore.cancel') {
			Joomla.submitform(task, document.getElementById('joomlagamesscore-form'));
		}
		else {
			
			if (task != 'joomlagamesscore.cancel' && document.formvalidator.isValid(document.id('joomlagamesscore-form'))) {
				
				Joomla.submitform(task, document.getElementById('joomlagamesscore-form'));
			}
			else {
				alert('<?php echo $this->escape(Text::_('JGLOBAL_VALIDATION_FORM_FAILED')); ?>');
			}
		}
	}
</script>

<form
	action="<?php echo JRoute::_('index.php?option=com_jugb_joomla_games&layout=edit&id=' . (int) $this->item->id); ?>"
	method="post" enctype="multipart/form-data" name="adminForm" id="joomlagamesscore-form" class="form-validate form-horizontal">

	
	<input type="hidden" name="jform[id]" value="<?php echo $this->item->id; ?>" />
	<input type="hidden" name="jform[ordering]" value="<?php echo $this->item->ordering; ?>" />
	<input type="hidden" name="jform[state]" value="<?php echo $this->item->state; ?>" />
	<input type="hidden" name="jform[checked_out]" value="<?php echo $this->item->checked_out; ?>" />
	<input type="hidden" name="jform[checked_out_time]" value="<?php echo $this->item->checked_out_time; ?>" />
	<?php echo $this->form->renderField('created_by'); ?>
	<?php echo $this->form->renderField('modified_by'); ?>
	<?php echo JHtml::_('bootstrap.startTabSet', 'myTab', array('active' => 'joomlagamesscore')); ?>
	<?php echo JHtml::_('bootstrap.addTab', 'myTab', 'joomlagamesscore', JText::_('COM_JUGB_JOOMLA_GAMES_TAB_JOOMLAGAMESSCORE', true)); ?>
	<div class="row-fluid">
		<div class="span10 form-horizontal">
			<fieldset class="adminform">
				<legend><?php echo JText::_('COM_JUGB_JOOMLA_GAMES_FIELDSET_JOOMLAGAMESSCORE'); ?></legend>
				<?php echo $this->form->renderField('username'); ?>
				<?php echo $this->form->renderField('points'); ?>
				<?php echo $this->form->renderField('uid'); ?>
				<?php
				foreach((array)$this->item->uid as $value)
				{
					if(!is_array($value))
					{
						echo '<input type="hidden" class="uid" name="jform[uidhidden]['.$value.']" value="'.$value.'" />';
					}
				}
				?>
				<?php echo $this->form->renderField('gid'); ?>
				<?php
				foreach((array)$this->item->gid as $value)
				{
					if(!is_array($value))
					{
						echo '<input type="hidden" class="gid" name="jform[gidhidden]['.$value.']" value="'.$value.'" />';
					}
				}
				?>
				<?php if ($this->state->params->get('save_history', 1)) : ?>
					<div class="control-group">
						<div class="control-label"><?php echo $this->form->getLabel('version_note'); ?></div>
						<div class="controls"><?php echo $this->form->getInput('version_note'); ?></div>
					</div>
				<?php endif; ?>
			</fieldset>
		</div>
	</div>
	<?php echo JHtml::_('bootstrap.endTab'); ?>

	
	<?php echo JHtml::_('bootstrap.endTabSet'); ?>

	<input type="hidden" name="task" value=""/>
	<?php echo JHtml::_('form.token'); ?>

</form>
