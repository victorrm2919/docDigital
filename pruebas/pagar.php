<?php
require '../functions/openpay.php';

$customerId = $_POST['token_id'];

echo $customerId['card'];


$customer = $openpay->tokens->get($customerId);


die(json_encode($customer));