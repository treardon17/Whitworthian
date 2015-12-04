<!DOCTYPE html>

<html>
	<?php include_once("pages/head.php")?>
	<body>
		<div id="wrapper">
			<?php
				include_once("pages/header.php");
				include_once("pages/menu.php");
			 ?>
			<div id="content">
				<?php
					/*include_once("pages/intropage.php");*/
					include_once("pages/newspage.php");
				?>
			</div>
			<?php include_once("pages/footer.php") ?>
		</div>
		<script src="js/init.js"></script>
	</body>	
</html>