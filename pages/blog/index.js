import { countPosts, listPostContent } from '../../lib/posts';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { jsx, Container, Box, Text } from 'theme-ui';

import PostList from '../../components/postlist';
import Layout from '../../components/layout';

import config from '../../lib/config';

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return (
    (useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString) +
    '&hellip;'
  );
}

export default function BlogPage({ posts }) {
  return (
    <Layout>
      <Head>
        <script async src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <title>Blog | X Capitol</title>
      </Head>
      <NextSeo title="Blog | X Capitol" />
      <Box sx={{ p: 1, height: '100vh' }}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <PostList posts={posts} />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = listPostContent(1, config.posts_per_page);
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
}

const styles = {
  contentWrapper: {
    pt: [9, 9, 9, 9, 150],
    pb: [7, 7, 7, 7, 150],
    display: 'flex',
    width: ['100%', null, null, '650px', '745px'],
    flexDirection: 'column',
    mx: 'auto',
  },
};
