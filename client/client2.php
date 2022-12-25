<?php

require 'vendor/autoload.php';

use ElephantIO\Client;

session_start();

$url = 'http://localhost:3000';
$client = new Client(Client::engine(Client::CLIENT_4X, $url));
$client->initialize();
$client->of('/');

$client->emit('message', ['ping']);

if ($packet = $client->wait('message')) {
    echo $packet->data;
}
