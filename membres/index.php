<?php
session_start();
include_once('inc/header.php');
if(isset($_SESSION['user']) && !empty($_SESSION['user'])){
    // Ici, l'utilisateur est connecté
    include_once('inc/banner.php');
    ?>
    <div class="hello">
        <h2>Chat &#x1F639; de l'<span class="grey">A</span><span class="green">F</span><span class="red">P</span><span class="green">S</span> <span class="grey">D</span>inan</span></h2>
        
    <?php
        // Ici, l'utilisateur est connecté et c'est un admin
if ($_SESSION['user']['isAdmin']){
    ?>
            <div class="hello-admin">
                <p >Bonjour <span class="hello-name">  <?= $_SESSION['user']['pseudo'] ?></span></p>
                <div class="admin-btn">
                    <a class="btn btn-deco" href="deconnexion.php">Déconnexion</a>
                    <a class="btn btn-insc" href="inscription.php">Ajouter un membre</a>
                    <a class="btn btn-art" href="article.php">Écrire un article</a>
                    <a class="btn btn-deco" href="managearticle.php">Gérer les articles</a>
                </div>
                <button class="btn btn-avatar" id="btn-avatar">Changer mon avatar</button> 
                <span id="alert">ATTENTION: un fichier au mauvais format ou trop volumineux ne sera pas pris en compte</span>
        </div>

 <?php }else { ?>
         <!-- Ici, l'utilisateur est connecté et ce n'est pas un admin -->
               <div class="hello-user">
            <p >Bonjour <span class="hello-name">  <?= $_SESSION['user']['pseudo'] ?></span></p>
            <a class="btn btn-deco" href="deconnexion.php">Déconnexion</a>
            <button class="btn btn-avatar" id="btn-avatar">Changer mon avatar</button>
            <span id="alert">ATTENTION: un fichier au mauvais format ou trop volumineux ne sera pas pris en compte</span>
        </div>
        <?php
}
        ?>
    </div>


    <form class="avatar-form" method="post" enctype="multipart/form-data">
        <div>
            <label for="fichier">Veuillez choisir un fichier au format .jpg, .jpeg, .png ou .webp faisant moins d'1Mo
                <input type="file" name="image" id="fichier" accept=".jpg,.jpeg,.png,.webp" style="width: 138px;" onchange="this.style.width = '250px'; " >
            </label>
          
        </div>
        <div>
            <!-- <button id="send-avatar" type="submit">Envoyer</button>  -->
            <div class="avatarsub-container">
                <div id="formsubmitbutton">
                    <input type="submit" name="submitter" value="Envoyer" onclick="ButtonClicked()">
                    </div>
                    <div id="buttonreplacement" style=" position:absolute; top:50%; left:0%; transform: translateY(-50%); display:none;">
                    <img src="./assets/loading.gif" style="height:100%;" alt="loading...">
                </div>
                <button class="btn-avatar">Annuler</button>
            </div>            
        </div>

    </form>



<?php 
include_once('inc/discussions.php');
}else{
    // Ici l'utilisateur n'est pas connecté
    ?>
    <a class="backsite" href="/membres/deconnexion.php">Retour au site</a>
    <div class="connexion-container">
        <a class="btn btn-co mr-2" href="connexion.php">Connexion</a> 
        <div>
            <p>Vous êtes membre de l'association ? <br> Demandez-nous un accès <br>
            lors d'une de nos rencontres ou par mail <br>à Bénédicte ou Laurent</p>
        </div>

    </div>


<?php
}

include_once('inc/headerbottom.php');
include_once('inc/footer.php');


// UPLOAD
// On vérifie si un fichier a été envoyé
if (isset($_FILES["image"]) && ($_FILES["image"]["error"]===0)){
    // vérifications (ex extension, type, dimensions, poids...)
    //  toujours vérifier l'extension et le type mime
  
    $allowed = [
        "jpg" => "image/jpeg",
        "jpeg" => "image/jpeg",
        "png" => "image/png",
        "webp" => "image/webp"
    ];
    $filename = $_FILES["image"]["name"];
    $filetype = $_FILES["image"]["type"];
    $filesize = $_FILES["image"]["size"];

    $extension = strtolower(pathinfo($filename, PATHINFO_EXTENSION));
    // on vérifie l'absence de l'extension ds les clés ou du type dans les valeurs

    if(!array_key_exists($extension, $allowed) || !in_array($filetype, $allowed)){
        // extension et ou type incorrect
         die('102 incorrect');
  
    }

    // le type est correct
    // On limite à 1mo
    if($filesize > 1024 * 1024){

        die("110 Fichier trop volumineux");
      
    }

    // on génère un nom unique
    $newname = str_replace(" ", "", $_SESSION['user']['pseudo'] );


    // on génère le chemin
   $newfilename = __DIR__ ."/images/uploaded/$newname.$extension" ;
    // var_dump($_FILES);
    if (!move_uploaded_file($_FILES["image"]["tmp_name"], $newfilename))
    {die("l'upload a échoué");}

    // ne peut être que lu, ne sera pas exécuté si script
    chmod($newfilename, 0777);


    // RESIZE
    $infos = getimagesize($newfilename);

$largeur = $infos[0];
$hauteur = $infos[1];

// créer nouvelle image vierge en mémoire
$nouvelleImage = imagecreatetruecolor(200, $hauteur / $largeur *200);

// ouvrir l'image source
switch($infos["mime"]){
    case "image/png":
        // on ouvre le png
        $imageSource = imagecreatefrompng($newfilename);
            break;
        // on ouvre le jpg
        case "image/jpeg":
        $imageSource = imagecreatefromjpeg($newfilename);
            break;
        // on ouvre le webp
        case "image/webp":
        $imageSource = imagecreatefromwebp($newfilename);
            break;
        default:
        die("151 format d'image incorrect");
}

// on copie toute l'image source et on la colle dans la destination en la réduisant
imagecopyresampled(
    $nouvelleImage, //destination
    $imageSource, //départ
    0, //position en x coin sup gauche ds destination
    0, //position en y coin sup gauche ds destination
    0, //position en x coin sup gauche ds source
    0, //position en y coin sup gauche ds source
   200, //largeur ds destination
  $hauteur / $largeur *200, //hauteur ds destination
    $largeur, //largeur ds source
    $hauteur, //hauteur ds source
);

// on enregistre la nouvelle image sur le serveur
switch($infos["mime"]){
    case "image/png":
        // on ouvre le png
        imagepng($nouvelleImage, __DIR__ ."/images/resized/".$newname.".".$extension);
 
        // header('Location: lazezbzh.ovh/updateavatar.php?newavatar=./images/resized/'.$newname.'.'.$extension.'&user='.$_SESSION['user']['pseudo']);
        // echo "<script type='text/javascript'>alert('Image redimensionnée');</script>";
            break;
        // on ouvre le jpg
        case "image/jpeg":
        imagejpeg($nouvelleImage, __DIR__ ."/images/resized/".$newname.".".$extension);
        
        // header('Location: lazezbzh.ovh/updateavatar.php?newavatar=./images/resized/'.$newname.'.'.$extension.'&user='.$_SESSION['user']['pseudo']);
            break;
        // on ouvre le webp
        case "image/webp":
        imagewebp($nouvelleImage, __DIR__ ."/images/resized/".$newname.".".$extension);
    
        // header('Location: lazezbzh.ovh/updateavatar.php?newavatar=./images/resized/'.$newname.'.'.$extension.'&user='.$_SESSION['user']['pseudo']);
            break;
        default:
        die("format d'image incorrect");
}

//on détruit les images dans la mémoire
imagedestroy($imageSource);
unlink($newfilename);
imagedestroy($nouvelleImage);
// CHANGEMENTS

$newavatar='./images/resized/'.$newname.'.'.$extension;
//pour "forcer" le cache
$picture=$newavatar."?".filectime($newavatar); 
$newuser= $_SESSION['user']['pseudo'];

 require_once('inc/bdd.php');
     $sql='UPDATE users SET avatar = :avatar WHERE pseudo = :pseudo';
     $query = $db->prepare($sql);
     $query->bindValue(':avatar', $picture, PDO::PARAM_STR);
    $query->bindValue(':pseudo', $newuser, PDO::PARAM_STR);
     $query->execute();
     $query->execute();


clearstatcache();

}




?>



