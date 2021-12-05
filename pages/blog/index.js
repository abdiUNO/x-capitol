import { countPosts, listPostContent } from '../../lib/posts';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { jsx, Container, Box, Text } from 'theme-ui';

import PostList from '../../components/PostList';
import Layout from '../../components/layout';

import config from '../../lib/config';

export default function BlogPage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <Head>
        <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <title>Blog | X Capitol</title>
      </Head>
      <NextSeo title="Blog | X Capitol" />
      <Box sx={{ p: 4 }}>
        <PostList posts={posts} />
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = listPostContent(1, config.posts_per_page);

  return {
    props: {
      posts,
    },
  };
}
