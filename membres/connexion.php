<?php
// On active l'accès à la session
session_start();

// Formulaire de connexion

// On vérifie que $_POST existe et qu'il n'est pas vide.
if(isset($_POST) && !empty($_POST)){

    // On vérifie que tous les champs sont remplis
    if(isset($_POST['email']) && !empty($_POST['email']) && isset($_POST['pass']) && !empty($_POST['pass'])){
        // On récupère les valeurs saisies
        $mail = strip_tags($_POST['email']);
        $pass = $_POST['pass'];

        // On vérifie si l'email existe dans la base de données
        // On se connecte à la base
        require_once('inc/bdd.php');

        // On écrit la requête
        $sql = 'SELECT * FROM `users` WHERE `email` = :email;';

        // On prépare la requête
        $query = $db->prepare($sql);

        // On injecte (terme scientifique) les valeurs
        $query->bindValue(':email', $mail, PDO::PARAM_STR);

        // On exécute la requête
        $query->execute();

        // On récupère les données
        $user = $query->fetch(PDO::FETCH_ASSOC);

        // Soit on a une réponse dans $user, soit non
        // On vérifie si on a une réponse
        if(!$user){
            echo '<span class="error-form">Email et/ou mot de passe invalide</span>';
        }else{
            // if (password_verify($pass, $user['password']))
   
            if ($pass== $user['password']){
                // On crée la session "user"
                // On ne stocke JAMAIS de données dont on ne maîtrise pas le contenu
                $_SESSION['user'] = [
                    'id'    => $user['id'],
                    'email' => $user['email'],
                    'pseudo'  => $user['pseudo'],
                    'isAdmin' => $user['isAdmin']
                ];
            
                
                header('Location: index.php');
            }
            else{
                // echo 'Email et/ou mot de passe invalide';
                 echo "<script type='text/javascript'>alert('Email et/ou mot de passe invalide.');</script>";
            }
        }

    }else{
        // echo "Veuillez remplir tous les champs...";
        echo "<script type='text/javascript'>alert('Veuillez remplir tous les champs.');</script>";
    }
}

include_once('inc/header.php');
?>
<div class="inscription-container col-12 my-1">
    <a href="/membres/index.php" class="btn btn-cancel"> &#x274C;</a>
    <h1>Connexion</h1>
    <form method="post">
        <div class="form-group">
            <label for="email">E-mail :</label>
            <input class="form-control" id="email" name="email">
        </div>
        <div class="form-group">
            <label for="pass">Mot de passe :</label>
            <div class="pass-container">
                <input type="password" class="form-control" id="pass" name="pass"> 
                <img class="reveal-pass" src="./assets/eye-open.svg" alt="">
            </div>
        </div>
        <button class="btn btn-co">Me connecter</button>
    </form>
</div>
<?php
include_once('inc/footer.php');
