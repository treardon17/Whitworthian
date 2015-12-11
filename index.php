<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<?php include_once("pages/head.php")?>
	<body>
		<div id="wrapper">
			<?php
				include_once("pages/header.php");
				include_once("pages/menu.php");
			 ?>
			<div id="content" class="m-scene">
				<?php
					/*include_once("pages/intropage.php");*/
					include_once("pages/homepage.php");
				?>
			</div>
			<?php include_once("pages/footer.php") ?>
		</div>
		<script src="js/prefixfree.min.js"></script>
		<script src="js/init.js"></script>
	</body>	
</html>