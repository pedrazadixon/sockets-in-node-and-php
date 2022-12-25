<?php

require 'vendor/autoload.php';

use ElephantIO\Client;

$url = 'http://localhost:3000';
$client = new Client(Client::engine(Client::CLIENT_4X, $url));
$client->initialize();
$client->of('/');

$data = ['username' => 'my-user'];
$client->emit('message', ['ping']);
