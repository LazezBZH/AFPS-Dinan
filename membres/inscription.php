<?php
session_start();

if(isset($_POST) && !empty($_POST)){
    // On vérifie que tous les champs sont existants et remplis
    if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['pseudo']) && !empty($_POST['pseudo']) && isset($_POST['pass']) && !empty($_POST['pass'])){
    








        // Ici le formulaire est complet
        // On récupère les valeurs des champs
        $pseudo = strip_tags($_POST['pseudo']);
        $email = strip_tags($_POST['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { echo "<script type='text/javascript'>alert('Format du mail non valide!');</script>";}
        else{
        // On récupère le mot de passe et on le chiffre (NON dans mon cas pas de chiffrement)
        // $pass = password_hash($_POST['pass'], PASSWORD_BCRYPT);
        $pass = $_POST['pass'];
   


           // On se connecte à la base
        require_once('inc/bdd.php');


        // pour ne pas enregistrer deux utilisateurs avec le même mail
            $sql1 = 'SELECT email FROM users WHERE email = :email';
            $query1 = $db->prepare($sql1, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
            $query1->bindValue(':email', $email, PDO::PARAM_STR);
            $query1->execute(['email' => $email]);
            $res1 = $query1->fetchAll();
// pour ne pas enregistrer deux utilisateurs avec le même pseudo
            $sql2 = 'SELECT email FROM users WHERE pseudo = :pseudo';
            $query2 = $db->prepare($sql2, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
            $query2->bindValue(':pseudo', $pseudo, PDO::PARAM_STR);
            $query2->execute(['pseudo' => $pseudo]);
            $res2 = $query2->fetchAll();
     

        // 
            if ($res1){
                echo "<script type='text/javascript'>alert('Cet Email est déjà utilisé, nous ne pouvons pas ajouter un autre utilisateur avec cet email');</script>";
            } elseif ($res2){
                echo "<script type='text/javascript'>alert('Ce Pseudo déjà utilisé, nous ne pouvons pas ajouter un autre utilisateur avec ce pseudo');</script>";
            }
             else
            {
                        // On écrit la requête
        $sql = 'INSERT INTO `users`(`email`, `password`, `pseudo`) VALUES (:email, :password, :pseudo);';

        // On prépare la requête
        $query = $db->prepare($sql);

        // On injecte les valeurs
        $query->bindValue(':email', $email, PDO::PARAM_STR);
        $query->bindValue(':password', $pass, PDO::PARAM_STR);
        $query->bindValue(':pseudo', $pseudo, PDO::PARAM_STR);

        // On exécute la requête
        $query->execute();
        
        // On redirige vers la page d'accueil
        // header('Location: admin.php');
     echo "<script type='text/javascript'>alert('Membre créé.');</script>";}

            }


    }else{
        // echo '<span class="error-form">Tous les champs sont obligatoires</span>';
        echo "<script type='text/javascript'>alert('Tous les champs sont obligatoires');</script>";
    }
    
}
include_once('inc/header.php');
?>
<div class="inscription-container col-12 my-1">
    <h1>Ajout d'un membre</h1>
    <form method="post">
        <div class="form-group">
            <label for="email">E-mail :</label>
            <input class="form-control" id="email" name="email">
        </div>
        <div class="form-group">
            <label for="pseudo">Pseudo :</label>
            <input class="form-control" type="text" id="pseudo" name="pseudo">
        </div>
        <div class="form-group">
            <label for="pass">Mot de passe :</label>
            <input class="form-control" id="pass" name="pass">
        </div>
        <button class="btn btn-add">Ajouter</button>
     
    </form>
       <a href="/membres/index.php" class="btn btn-cancel"> &#x274C;</a>
</div>
<?php
include_once('inc/footer.php');
