import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Script from 'next/script';
import BasicMeta from '../components/meta/BasicMeta';
import { markdownToHtml } from '../lib/markdown';
import Head from 'next/head';
import { Box, Container } from 'theme-ui';
import { motion } from 'framer-motion';
import { Content } from '../components/postitem';
import { fetchPrivacyPolicy } from '../lib/config';
import Postitem from '../components/postitem';
export default function PrivacyPage({ content, date }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const props = {
    title: 'Privacy Policy',
    tags: [],
    content,
    timeFormatted: `Last Update: ${date}`,
  };
  return (
    <Layout animate={true}>
      <Head>
        <title>Privacy Policy | X Capitol</title>
      </Head>
      <BasicMeta
        url="/privacy"
        description="Privacy Policy for X Capital"
        title="Privacy Policy"
        keywords={['privacy policy', 'privacy terms']}
      />
      <Script src="//embed.typeform.com/next/embed.js" />

      <Box sx={{ p: 0, m: 0 }}>
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
              <Postitem {...props} />
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
}

const styles = {
  contentWrapper: {
    pt: [9, 9, 9, 9, 150],
    pb: [7, 7, 7, 7, 150],
    pl: 0,
    pr: 0,
    display: 'flex',
    width: ['100%', null, null, '750px', '845px'],
    flexDirection: 'column',
    mx: 'auto',
    overflow: 'hidden',
  },
};

export async function getStaticProps({ params }) {
  const policy = fetchPrivacyPolicy();
  const contentHtml = await markdownToHtml(policy.content || '');

  return {
    props: {
      content: contentHtml,
      date: policy.date,
    },
  };
}
