<?php

$client = new GuzzleHttp\Client();
$res = $client->post('https://api.remove.bg/v1.0/removebg', [
    'multipart' => [
        [
            'name'     => 'image_file',
            'contents' => fopen('/assets/img/feauter.jpg', 'r')
        ],
        [
            'name'     => 'size',
            'contents' => 'auto'
        ]
    ],
    'headers' => [
        'X-Api-Key' => 'HWMjuJTJBu7uXXAzw8jycZbX'
    ]
]);

$fp = fopen("no-bg.png", "wb");
fwrite($fp, $res->getBody());
fclose($fp);
