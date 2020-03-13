<?php
  rename('Data/'.$_POST['old_title'], 'Data/'.$_POST['title']);
  file_put_contents('Data/'.$_POST['title'],$_POST['description']);

?>
