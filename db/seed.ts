import { db, Timeline } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Timeline).values([
		{
			"_index": 1,
			"uid": "451c1cd49a2f955d",
			"instance_type": "m1.small",
			"instance_category": "General Purpose",
			"instance_generation": "Previous generation",
			"release_month": "August",
			"release_year": 2006,
			"product_page": "https://aws.amazon.com/ec2/previous-generation/",
			"announcement_url": "https://aws.amazon.com/about-aws/whats-new/2006/08/24/announcing-amazon-elastic-compute-cloud-amazon-ec2---beta/",
			"announcement_published": "Aug 24, 2006",
			"blog_post_url": null,
			"blog_post_published": null,
		},
		{
			"_index": 2,
			"uid": "85589f23e811f229",
			"instance_type": "m1.large",
			"instance_category": "General Purpose",
			"instance_generation": "Previous generation",
			"release_month": "October",
			"release_year": 2007,
			"product_page": "https://aws.amazon.com/ec2/previous-generation/",
			"announcement_url": "https://aws.amazon.com/about-aws/whats-new/2007/10/22/amazon-ec2-now-in-unlimited-beta-and-launching-new-instance-types/",
			"announcement_published": "Oct 22, 2007",
			"blog_post_url": "https://aws.amazon.com/blogs/aws/amazon-ec2-gets/",
			"blog_post_published": "Oct 16, 2007",
		},
	]);
}
