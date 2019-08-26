<?php
require 'database.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){

    $request = json_decode($postdata);

    if(trim($request->name) === '' || (float)$request->amount < 0){
        return http_response_code(400);
    }

    $name = mysqli_real_escape_string($con, trim($request->name));
    $email = mysqli_real_escape_string($con, trim($request->email));
    $number = mysqli_real_escape_string($con, (int)$request->number);   /* need to change for email  */

    $sql = "INSERT INTO `table1`(`id`, `name`, `number`, `email`) VALUES (null, '{$name}', '{$number}', '{$email}')";

    if(mysqli_query($con,$sql)){
        http_response_code(201);
        $details = [
            'name' => $name,
            'email' => $email,
            'number' => $number,
            'id' => mysqli_insert_id($con)
        ];
        echo json_encode($details);
    }
    else{
        http_response_code(422);
    }
}

?>