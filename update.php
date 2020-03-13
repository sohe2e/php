<?php
require_once('lib/print.php');
require_once('view/top.php');
 ?>

            <a href ="create.php">Create</a>
            <?php  if(isset($_GET['id'])){ ?>
              <a href ="update.php?id=<?= $_GET['id']; ?>">Update</a>
            <?php } ?>

            <div id="article">
            <h2>
            <?php
              print_title();
            ?>

            </h2>
            <?php
              print_description();
            ?>

            <form action="update_process.php" method="post">
              <input type="hidden" name="old_title" value="<?=$_GET['id']?>">
              <p>
                  <input type="text" name="title" value="<?php print_title();?>">
              </p>
              <p>
                  <textarea name="description" placeholder="<?php print_description(); ?>"></textarea>
              </p>
              <p>
                  <input type="submit">
              </p><
            </form>

            </div>
      </div>
<?php
require_once('view/buttom.php');
?>
