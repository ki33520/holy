<?php
if (!(isset($_GET['code']) && $_GET['code'] == 'mickey123')) {
    die('Access denied!');
}
setcookie('cw201402mk','1',time() + 3600 * 1);
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>Administration</title>
<link rel="stylesheet" href="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/jquery.lightbox-0.5.css" media="screen" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="js/admin.js"></script>
<script type="text/javascript" src="js/jquery.lightbox-0.5.js"></script>
<!-- <script src="http://cdn.bootcss.com/twitter-bootstrap/3.0.3/js/bootstrap.min.js"></script> -->
<!--[if lt IE 9]>
<script src="http://cdn.bootcss.com/html5shiv/3.7.0/html5shiv.min.js"></script>
<script src="http://cdn.bootcss.com/respond.js/1.3.0/respond.min.js"></script>
<![endif]-->

</head>
<body>
<h2>Administration</h2>
<div id="content">
    <div class="message-box" style="height:80px">
        <div class="alert alert-success"></div>
        <div class="alert alert-info"></div>
        <div class="alert alert-warning"></div>
        <div class="alert alert-danger"></div>
    </div>
    <ul class="nav nav-tabs">
      <li id="all" class="active"><a href="#">All</a></li>
      <li id="published"><a href="#">Published</a></li>
      <li id="unpublished"><a href="#">Unpublished</a></li>
      <li id="stick"><a href="#">Stick</a></li>
      <li id="unstick"><a href="#">Unstick</a></li>
      <li id="stock"><a href="#">Stock</a></li>
      <li id="winner"><a href="#">Winner</a></li>
    </ul>
    <div id="loading"></div>
    <div id="container">
        <div class="data"></div>
        <div class="pagination"></div>
    </div>
</div>
</body>
</html>