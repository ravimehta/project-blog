import RSS from "rss";

import { BLOG_TITLE, BLOG_DESCRIPTION } from "@/constants";
import { getBlogPostList } from "@/helpers/file-helpers";

export async function GET(request) {
  /* lets create an rss feed */
  const feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    feed_url: request.url,
    site_url: request.nextUrl.origin,
    ttl: "60",
  });

  const blogPostList = await getBlogPostList();

  blogPostList.forEach((blogPost) => {
    feed.item({
      title: blogPost.title,
      description: blogPost.abstract,
      url: `${request.nextUrl.origin}/${blogPost.slug}`,
      guid: blogPost.slug,
      date: blogPost.publishedOn,
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
