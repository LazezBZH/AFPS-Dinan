<?php

include_once('inc/header.php');
 require_once('inc/bdd.php');

     $urlid = strip_tags($_GET['id']);
     $sql = "DELETE FROM `news` WHERE `id` = $urlid";
     $query = $db->query($sql);
     
    echo "<script type='text/javascript'>alert('Article supprimé');
    window.location.href = '/managearticle.php';
    </script>";
     include_once('inc/footer.php');
?>

