import { countPosts, listPostContent } from '../../../lib/posts';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { jsx, Container, Box, Text } from 'theme-ui';

import PostList from '../../../components/postlist';
import Layout from '../../../components/layout';

import config from '../../../lib/config';

export default function Page({ posts, pagination }) {
  return (
    <Layout>
      <Head>
        <title>Blog | X Capitol</title>
      </Head>
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

export const getStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page);
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

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
