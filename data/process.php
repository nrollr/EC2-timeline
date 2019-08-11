<?php

// Substitute with values reflecting your own environment
$db_host = "hostname";
$db_user = "username";
$db_pass = "password";
$db_name = "database";

$db = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

// https://github.com/nrollr/ec2-timeline/blob/master/data/timeline.sql
$sql = "SELECT * from `EC2-releases`";
$query = mysqli_query($db, $sql);
$resultset = array();
if (mysqli_num_rows($query) > 0) {
	while($row = mysqli_fetch_assoc($query)) {
		$resultset[] = $row;
	}
}

foreach ($resultset as $row) {
		$result[$row["_index"]] = array(
				  "_index" => $row["_index"],
					 "uid" => $row["uid"],
		   "instance_type" => $row["instance_type"],
	   "instance_category" => $row["instance_category"],
	 "instance_generation" => $row["instance_generation"],
		   "release_month" => $row["release_month"],
			"release_year" => $row["release_year"],
			"product_page" => $row["product_page"],

			"announcement" => array(
				"url" => $row["announcement_url"],
		  "published" => $row["announcement_published"]),

			   "blog_post" => array(
				"url" => $row["blog_post_url"],
		  "published" => $row["blog_post_published"])
		);
	}

$result = array(
	"release" => "v1.1.2",
	 "origin" => "https://instancetyp.es/timeline.json",
  "published" => "Aug 11, 2019",
  "instances" => array_values($result)
);

$output = json_encode($result, JSON_UNESCAPED_SLASHES | JSON_NUMERIC_CHECK | JSON_PRETTY_PRINT);
	file_put_contents("timeline.json", $output);
?>