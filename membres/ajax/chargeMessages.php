<?php
// On vérifie la méthode utilisée
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    // On est en GET
    // On vérifie si on a reçu un id
    if(isset($_GET['lastId'])){
        // On récupère l'id et on le nettoie
        $lastId = (int)strip_tags($_GET['lastId']);

        // On initialise le filtre
        $filtre = ($lastId > 0) ? " WHERE `messages`.`id` > $lastId" : '';

        // On se connecte à la base
        require_once('../inc/bdd.php');

        // On écrit la requête
        $sql = 'SELECT `messages`.`id`, `messages`.`message`, `messages`.`users_id`, `messages`.`created_at`, `users`.`pseudo`,`users`.`avatar` FROM `messages` LEFT JOIN `users` ON `messages`.`users_id` = `users`.`id`'.$filtre.' ORDER BY `messages`.`id`;';

        // On exécute la requête
        $query = $db->query($sql);

        // On récupère les données
        $messages = $query->fetchAll();
        // $messages = json_decode($messages,true);

            // icones
            // $iconsJson= file_get_contents('../icons.json');
            // $icons = json_decode($iconsJson,true);

            // foreach ($messages as $status_text){
            //     foreach($icons as $item) { 
            //     $image = $item['image']; 
            //     $smiley = $item['smiley']; 
            //     $status_text = str_replace($smiley, '<img class="chat-icon" src="'.$image.'"/>' , $status_text);
            //     }
            // }


        // On encode en JSON
        $messagesJson = json_encode($messages);



     

        // On envoie
        echo $messagesJson;
    }
}else{
    // Mauvaise méthode
    http_response_code(405);
    echo json_encode(['message' => 'Mauvaise méthode']);
}