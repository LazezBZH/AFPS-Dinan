<?php
     $urlid = strip_tags($_GET['id']);
if(isset($_POST) && !empty($_POST)){
    // On vérifie que tous les champs sont existants et remplis
    if(isset($_POST['title']) && !empty($_POST['title']) && isset($_POST['para']) && !empty($_POST['para']) ){
        // Ici le formulaire est complet
        // On récupère les valeurs des champs
        $title = strip_tags($_POST['title']);
        $para = strip_tags($_POST['para']);

      
        // On se connecte à la base
        require_once('inc/bdd.php');
        $sql1 =  "SELECT `news`.`id`, `news`.`title`, `news`.`para`, `news`.`created_at` FROM `news`  WHERE `id` = $urlid";
        // On écrit la requête
          $sql = "UPDATE `news` SET `title` = :title, `para` = :para WHERE `id` = $urlid ";

        // On prépare la requête
        $query = $db->prepare($sql);
        $query1 = $db->prepare($sql1);

        // On injecte les valeurs
        $query->bindValue(':para', $para, PDO::PARAM_STR);
        $query->bindValue(':title', $title, PDO::PARAM_STR);

               // On récupère les données
        $news = $query1->fetchAll();

        // On encode en JSON
        $newsJson = json_encode($news);

        // On envoie
        echo $newsJson;

        // On exécute la requête
        $query->execute();

        // On redirige vers la page d'accueil
        header('Location: managearticle.php');

    }else{
        // echo '<span class="error-form">Tous les champs sont obligatoires</span>';
        echo "<script type='text/javascript'>alert('Tous les champs sont obligatoires');</script>";
    }
}


 ?>

<div class="inscription-container col-12 my-1">
    <h1>Modification:</h1>
    <div  id="update-form"></div>
       <a href="/managearticle.php" class="btn btn-cancel_update"> &#x274C;</a>
</div>
<?php
  include_once('inc/header.php');
    include_once('inc/headerbottom.php');
include_once('inc/footer.php');