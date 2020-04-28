<?php

/**
 * @version    CVS: 1.0.0
 * @package    Com_Jugb_joomla_games
 * @author      JUG Berlin <info@damiontools.de>
 * @copyright  2020 JUG Berlin
 * @license    GNU General Public License Version 2 oder später; siehe LICENSE.txt
 */
defined('_JEXEC') or die;

JLoader::register('Jugb_joomla_gamesHelper', JPATH_ADMINISTRATOR . DIRECTORY_SEPARATOR . 'components' . DIRECTORY_SEPARATOR . 'com_jugb_joomla_games' . DIRECTORY_SEPARATOR . 'helpers' . DIRECTORY_SEPARATOR . 'jugb_joomla_games.php');

use \Joomla\CMS\Factory;
use \Joomla\CMS\MVC\Model\BaseDatabaseModel;

/**
 * Class Jugb_joomla_gamesFrontendHelper
 *
 * @since  1.6
 */
class Jugb_joomla_gamesHelpersJugb_joomla_games
{
	/**
	 * Get an instance of the named model
	 *
	 * @param   string  $name  Model name
	 *
	 * @return null|object
	 */
	public static function getModel($name)
	{
		$model = null;

		// If the file exists, let's
		if (file_exists(JPATH_SITE . '/components/com_jugb_joomla_games/models/' . strtolower($name) . '.php'))
		{
			require_once JPATH_SITE . '/components/com_jugb_joomla_games/models/' . strtolower($name) . '.php';
			$model = BaseDatabaseModel::getInstance($name, 'Jugb_joomla_gamesModel');
		}

		return $model;
	}

	/**
	 * Gets the files attached to an item
	 *
	 * @param   int     $pk     The item's id
	 *
	 * @param   string  $table  The table's name
	 *
	 * @param   string  $field  The field's name
	 *
	 * @return  array  The files
	 */
	public static function getFiles($pk, $table, $field)
	{
		$db = Factory::getDbo();
		$query = $db->getQuery(true);

		$query
			->select($field)
			->from($table)
			->where('id = ' . (int) $pk);

		$db->setQuery($query);

		return explode(',', $db->loadResult());
	}

    /**
     * Gets the edit permission for an user
     *
     * @param   mixed  $item  The item
     *
     * @return  bool
     */
    public static function canUserEdit($item)
    {
        $permission = false;
        $user       = Factory::getUser();

        if ($user->authorise('core.edit', 'com_jugb_joomla_games'))
        {
            $permission = true;
        }
        else
        {
            if (isset($item->created_by))
            {
                if ($user->authorise('core.edit.own', 'com_jugb_joomla_games') && $item->created_by == $user->id)
                {
                    $permission = true;
                }
            }
            else
            {
                $permission = true;
            }
        }

        return $permission;
    }
}
