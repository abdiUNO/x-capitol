import { countPosts, listPostContent } from '../../lib/posts';
import { NextSeo } from 'next-seo';
import { Box, Container } from 'theme-ui';

import PostList from '../../components/postlist';
import Layout from '../../components/layout';
import Script from 'next/script';
import config from '../../lib/config';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import BasicMeta from '../../components/meta/BasicMeta';

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout animate={true}>
      <BasicMeta url="/blog" description={'blog index page'} title={'Blog'} />

      <Script src="//embed.typeform.com/next/embed.js" />
      <Box sx={{ p: 1, pt: 4 }}>
        <Container>
          <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={{
              enter: { transition: { staggerChildren: 0.1 } },
              exit: { transition: { staggerChildren: 0.1 } },
            }}>
            <Box sx={styles.contentWrapper}>
              <PostList posts={posts} pagination={pagination} />
            </Box>
          </motion.div>
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
