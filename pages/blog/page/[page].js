import { countPosts, listPostContent } from '../../../lib/posts';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Box, Container } from 'theme-ui';

import PostList from '../../../components/postlist';
import Layout from '../../../components/layout';
import Script from 'next/script';
import config from '../../../lib/config';
import { motion } from 'framer-motion';
import BasicMeta from '../../../components/meta/BasicMeta';

export default function Page({ posts, pagination, page }) {
  return (
    <Layout animate={true}>
      <Head>
        <title>Blog | X Capital</title>
      </Head>
      <BasicMeta
        url={`/posts/page/${page}`}
        description={'Blog page for X Capital'}
        title={'All posts'}
      />
      <Script src="//embed.typeform.com/next/embed.js" />

      <Box sx={{ p: 1 }}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={{
                enter: { transition: { staggerChildren: 0.1 } },
                exit: { transition: { staggerChildren: 0.1 } },
              }}>
              <PostList posts={posts} pagination={pagination} />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page);
  const posts = listPostContent(1, config.posts_per_page);
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      pagination,
      page,
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
