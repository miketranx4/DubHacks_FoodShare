<?php
	/*
		UserPie Version: 1.0
		http://userpie.com
		

	*/

	//General Settings
	//--------------------------------------------------------------------------
	
	//Database Information
	$dbtype = "mysqli"; 
	$db_host = "localhost";
	$db_user = "root";
	$db_pass = "";
	$db_name = "ClearFXv2";
	$db_port = "";
	$db_table_prefix = "userpie_";

	$langauge = "en";
	
	//Generic website variables
	$websiteName = "FoodShare";
	$websiteUrl = ""; //including trailing slash

	//Do you wish UserPie to send out emails for confirmation of registration?
	//We recommend this be set to true to prevent spam bots.
	//False = instant activation
	//If this variable is falses the resend-activation file not work.
	$emailActivation = true;

	//In hours, how long before UserPie will allow a user to request another account activation email
	//Set to 0 to remove threshold
	$resend_activation_threshold = 1;
	
	//Tagged onto our outgoing emails
	$emailAddress = "sutjin@hotmail.com";
	
	//Date format used on email's
	$emailDate = date("l \\t\h\e jS");
	
	//Directory where txt files are stored for the email templates.
	$mail_templates_dir = "models/mail-templates/";
	
	$default_hooks = array("#WEBSITENAME#","#WEBSITEURL#","#DATE#");
	$default_replace = array($websiteName,$websiteUrl,$emailDate);
	
	//Display explicit error messages?
	$debug_mode = false;

	//Remember me - amount of time to remain logged in.
	$remember_me_length = "1wk";

	########## app ID and app SECRET (Replace with yours) #############
	$appId = '999700746722836'; //Facebook App ID
	$appSecret = 'f344a98ea0a2d0e83167b0ecd838a67e'; // Facebook App Secret
	$return_url = 'http://yoursite.com/connect_script/';  //path to script folder
	$fbPermissions = 'publish_actions,email'; //more permissions : https://developers.facebook.com/docs/authentication/permissions/
	
	//---------------------------------------------------------------------------
?>
