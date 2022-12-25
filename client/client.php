<?php

require 'vendor/autoload.php';

$client = new WebSocket\Client("ws://localhost:3000/");
$client->text("ping");
echo $client->receive();
$client->close();
