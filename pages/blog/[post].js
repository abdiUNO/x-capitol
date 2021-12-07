import React from 'react';
import { renderToString } from 'react-dom/server';
import matter from 'gray-matter';
import fs from 'fs';
import yaml from 'js-yaml';
import moment from 'moment';
import { parseISO } from 'date-fns';

import { markdownToHtml } from '../../lib/markdown';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Box, Container, Heading, Paragraph, Text, Divider } from 'theme-ui';
import Layout from '../../components/layout';
import Postitem from '../../components/postitem';

import { fetchPostContent } from '../../lib/posts';

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function PostPage(props) {
  return (
    <Layout>
      <Box sx={{ p: 1, minHeight: '100vh' }}>
        <Container>
          <Box sx={styles.contentWrapper}>
            <Postitem {...props} />
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
    display: 'flex',
    width: ['100%', null, null, '650px', '745px'],
    flexDirection: 'column',
    mx: 'auto',
  },
};

export const getStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => '/blog/' + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const slug = params.post;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });

  const contentHtml = await markdownToHtml(content || '');
  const mdxSource = await renderToString(content, { scope: data });

  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      content: contentHtml,
      source: mdxSource,
      timeFormatted: moment(data.date).fromNow(),
    },
  };
}
