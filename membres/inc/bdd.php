<?php

/**
 * Connexion à la BDD
 */

 //A CHANGER
// Localisation de la BDD
// define('HOST', 'afpsdivdinan.mysql.db');
define('HOST', 'localhost');

// Nom d'utilisateur
// define('USER', 'afpsdivdinan');
define('USER', 'root');

// Mot de passe
// define('PASSWD', 'Dinan22afps');
define('PASSWD', '');

// Nom de la base de donnée
// define('DBNAME', 'afpsdivdinan');
define('DBNAME', 'chatafps');
//A CHANGER

try {
	$db = new PDO("mysql:host=". HOST .";dbname=". DBNAME, USER, PASSWD, [
		// Gestion des erreurs PHP/SQL
		PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING,
		// Gestion du jeu de caractères
		PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8",
		// Choix du retours des résultats
		PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
	]);

	//echo 'Base de données connectée';
}
catch (Exception $error) {
	// Attrape une exception
	echo 'Erreur lors de la connexion à la base de données : '. $error->getMessage();
}
