<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Max-Age: 86400');
header('Access-Control-Allow-Headers: x-requested-with');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');

header('Content-Type: application/x-json;charset=EUC-KR');

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "http://m.bus.go.kr/mBus/subway/getArvlByInfo.bms" . "?subwayId=" . $_GET["subwayId"] . "&statnId=" . $_GET["statnId"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$result = curl_exec($ch);
curl_close($ch);

echo $result;
?>