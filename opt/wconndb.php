
<html>
<head>

<style>
/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 95%;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 20%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;} 
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
</style>



</head>



<?php 

$fullname = $_POST['fullname'];
$mobile = $_POST['mobile'];

$email = $_POST['email'];
$visa = $_POST['visa'];
$tech = $_POST['tech'];
$services = $_POST['services'];



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usastudentdb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (fullname, mobile, email, tech,visa,services)
VALUES ('$fullname', '$mobile', '$email','$tech','$visa','$services')";

if ($conn->query($sql) === TRUE) {
  $last_id = $conn->insert_id;
  echo "New record created successfully. Last inserted ID is: " . $last_id;
 ?> <span class="popuptext" id="myPopup"></span>

<button onclick="myFunction()">Submit</button>

  <?php
  /*
  $to = $email;
         $subject = "This is subject";
         
         $message = "<b>This is HTML message.</b>";
         $message .= "<h1>This is headline.</h1>";
         
         $header = "From:b.maheshboya@gmail.com \r\n";
         $header .= "MIME-Version: 1.0\r\n";
         $header .= "Content-type: text/html\r\n";
         
         $retval = mail ($to,$subject,$message,$header);
         
         if( $retval == true ) {
            echo "Message sent successfully...";
         }else {
            echo "Mail could not be sent...";
         } 
*/

} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>




<script>
// When the user clicks on div, open the popup
function myFunction() {
  alert("Thanks for contacting us !!Our representative will contact you shortly ,Please check your mail or contact us on +91-9160944016");
}
</script>
</html>