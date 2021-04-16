<?php

$ch = curl_init('https://es.clippingmagic.com/api/v1/images');

curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_HTTPHEADER,
    array('Authorization: Basic OTQzNDpmMGhxdDNvZjk5amYyMmY0dmhiOHQ3NjRoMDg2aTEzcmU0ZmNtbzIyMXY3NnYwbmRlMHNj'));
curl_setopt($ch, CURLOPT_POSTFIELDS,
    array(
      'image' => '@' . realpath('example.jpeg'),
      'format' => 'result',
      'test' => true // TODO: Remove for production
      // TODO: Add more upload options here
    ));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);

// Parse the headers to get the image id & secret
$headers = [];
curl_setopt($ch, CURLOPT_HEADERFUNCTION,
  function($curl, $header) use (&$headers) {
    $len = strlen($header);
    $header = explode(':', $header, 2);
    if (count($header) < 2) // ignore invalid headers
      return $len;
    $headers[strtolower(trim($header[0]))][] = trim($header[1]);
    return $len;
  });

$data = curl_exec($ch);
if (curl_getinfo($ch, CURLINFO_HTTP_CODE) == 200) {
  // Store these if you want to be able to use the Smart Editor
  $imageId = $headers['x-amz-meta-id'][0];
  $imageSecret = $headers['x-amz-meta-secret'][0];

  // Save result
  file_put_contents("clipped.png", $data);
} else {
  echo "Error: " . $data;
}