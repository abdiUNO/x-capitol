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

export default function BlogPage({ posts, pagination }) {
  return (
    <Layout>
      <NextSeo title="Blog | X Capitol" />

      <NextSeo title="Blog | X Capitol" />
      <Box sx={{ p: 1 }}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <PostList posts={posts} pagination={pagination} />
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = listPostContent(1, config.posts_per_page);
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      pagination,
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
