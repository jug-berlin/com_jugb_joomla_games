DROP TABLE IF EXISTS `#__jugb_joomla_games_games`;
DROP TABLE IF EXISTS `#__jugb_joomla_games_score`;

DELETE FROM `#__content_types` WHERE (type_alias LIKE 'com_jugb_joomla_games.%');