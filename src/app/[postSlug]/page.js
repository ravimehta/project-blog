import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";
import { notFound } from "next/navigation";

const DivisionGroupsDemo = React.lazy(() =>
  import("@/components/DivisionGroupsDemo")
);

const CircularColorsDemo = React.lazy(() =>
  import("@/components/CircularColorsDemo")
);

export async function generateMetadata({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  if (!blogPost) {
    notFound();
  }
  const { frontmatter } = blogPost;

  return {
    title: `${frontmatter.title}`,
    description: `${frontmatter.abstract}`,
  };
}

async function BlogPost({ params }) {
  const blogPost = await loadBlogPost(params.postSlug);

  if (!blogPost) {
    notFound();
  }

  const { frontmatter, content } = blogPost;

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{
            pre: CodeSnippet,
            DivisionGroupsDemo,
            CircularColorsDemo,
          }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
