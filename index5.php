<!DOCTYPE html>
<html lang="en">
<head>
<style>
       
    table.contact-info {
  border-collapse: collapse;
  width: 700px; 
  margin: 100px;
  margin-left:200px;
  border: 5px solid #ccc;
 
}

table.contact-info th,
table.contact-info td {
  padding: 8px;
  border: 3px solid #ccc;
 
}

table.contact-info th {
  background-color: #f2f2f2;
  white-space: nowrap; 
}

    </style>
</head>

<body>

<?php


//connect database


$host = 'localhost';      
$db_user = 'root'; 
$db_pass = ''; 

if(isset($_POST['submit'])){
  echo "ok1";
  $username=$_POST['username'];
  $phone=$_POST['phone'];
  $email=$_POST['email'];
  $address=$_POST['address']; 
  //
  $image_name=$_FILES['file1']['name'];
  $filesize=$_FILES["image"]["size"];
  $image_temp=$_FILES['file1']['tmp_name'];
  $file_ext=explode('.',$_FILES['file1']['name']);
  $file_ext=strtolower(end($file_ext));
  $check=array('png','jpg','jpeg');
  echo "not attened";
   if($filesize > 1000000){
    echo "<script> alert(' file size is too large'); </script>";
}
  if(in_array($file_ext,$check)){
    echo "success";
    move_uploaded_file($image_temp,"images/". $image_name);
    echo  $image_name."image nme is";
  }

}

try {
   
    $conn = new PDO("mysql:host=$host", $db_user, $db_pass);

    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create a new database
    $new_db_name = 'week2image'; 
    $create_db_query = "CREATE DATABASE IF NOT EXISTS $new_db_name";

    $conn->exec($create_db_query);
    echo "Database created successfully: " ."<br>";

    // Use the newly created database
    $conn->exec("USE $new_db_name");

    // Create a new table
    $table_name = 'students'; 
    $create_table_query = "CREATE TABLE IF NOT EXISTS $table_name (
       image varchar(100) , name varchar(20) , phone varchar(20) , email varchar(20) , address varchar(20) 
    )";

    $conn->exec($create_table_query);
    echo "Table created successfully: " . "<br>";

    $insert="INSERT INTO students(image,name,phone,email,address) VALUES('$image_name','$username','$phone','$email','$address')";
    $conn->exec($insert);
    echo "value created successfully: " . "<br>";
   
    // SELECT QUERY
    $select ="SELECT * FROM students";
    $res= $conn->query($select);
    
     while($row = $res->fetch(PDO::FETCH_ASSOC)){
      //  echo "name".$row['name']."phone ".$row['phone']."email ".$row['email']."address: ".$row['address']."<br>";
     }


} catch(PDOException $e) {
    echo "Error: " . $e->getMessage() . "<br>";
}
// Close the connection
$conn = null;
?> 
<div id="para">
        <table class="contact-info">
            <tr>
              <th>IMAGE</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>address</th>
            
            </tr>
            <tr>
             <td><img src="images/<?php echo $image_name ;?>" width="100" alt=""></td>
              <td><?php echo $username; ?></td>
              <td><?php echo $phone; ?></td>
              <td><?php echo $email; ?></td>
              <td><?php echo $address; ?></td>
            
            </tr>
          </table>
    </div>
</body>
</html>









