### Data formats

Data related to the content of [https://instancetyp.es](https://instancetyp.es) is now available in `JSON` format.
* The file can be fetched via the following URL: [https://instancetyp.es/timeline.json](https://instancetyp.es/timeline.json)
* Not all data contained within these files is currently used by [https://instancetyp.es](https://instancetyp.es) - For example:
	* `news_url` and `news_date` reflect the [official announcements](https://aws.amazon.com/new/) of a (or several) new instance types
	* `blog_url` and `blog_date` reflect the [blog posts](https://aws.amazon.com/blogs/) referring to new instance types


Additionally `.csv` and `.sql` file formats are available within this directory:
* [timeline.csv](https://github.com/nrollr/ec2-timeline/blob/master/data/timeline.csv)
* [timeline.sql](https://github.com/nrollr/ec2-timeline/blob/master/data/timeline.sql)

Get a [quick preview](https://airtable.com/shrD2R7TFqOAvevfs) of the data via [Airtable](https://airtable.com).


#### JSON format
In order to generate the `JSON`-[file](https://instancetyp.es/timeline.json) `process.php` is used. It fetches the data from a MySQL-db and generates the file. To use the script, make sure to have a MySQL-db with the contents of [timeline.sql](https://github.com/nrollr/ec2-timeline/blob/master/data/timeline.sql) + adapt the database connection parameters to reflect your own environment.