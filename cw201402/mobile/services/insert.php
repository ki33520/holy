<?php

require_once 'medoo.php';

$database = new medoo(MYSQL_DATABASE);


$database->insert('el_cw201402_stock',
array (
	'aid' => 1,
	'name' => '阳光分享奖',
	'week' => 1,
	'percent' => '0',
	'bingo' => 0,
	'stock' => 3,
	'status' => 1
)
);

$database->insert('el_cw201402_stock',
array (
	'aid' => 2,
	'name' => '阳光幸运奖',
	'week' => 1,
	'percent' => '0',
	'bingo' => 0,
	'stock' => 10,
	'status' => 1
)
);
$database->insert('el_cw201402_stock',
array (
	'aid' => 3,
	'name' => '阳光参与奖',
	'week' => 1,
	'percent' => '0',
	'bingo' => 0,
	'stock' => 10,
	'status' => 1
)
);



?>