import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

import BlogHero from "@/components/BlogHero";

import styles from "./postSlug.module.css";
import { loadBlogPost } from "@/helpers/file-helpers";
import CodeSnippet from "@/components/CodeSnippet";

const DivisionGroupsDemo = React.lazy(() =>
  import("@/components/DivisionGroupsDemo")
);

export async function generateMetadata({ params }) {
  const { frontmatter } = await loadBlogPost(params.postSlug);

  return {
    title: `${frontmatter.title}`,
    description: `${frontmatter.abstract}`,
  };
}

async function BlogPost({ params }) {
  const { frontmatter, content } = await loadBlogPost(params.postSlug);

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote
          source={content}
          components={{ pre: CodeSnippet, DivisionGroupsDemo }}
        />
      </div>
    </article>
  );
}

export default BlogPost;
