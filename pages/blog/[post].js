import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { renderToString } from 'react-dom/server';
import matter from 'gray-matter';
import { fetchPostContent } from '../../lib/posts';
import fs from 'fs';
import yaml from 'js-yaml';

import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { jsx, Container, Box, Text } from 'theme-ui';

import Layout from '../../components/layout';

import config from '../../lib/config';

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function ServicesPage({
  title,
  dateString,
  slug,
  tags,
  author,
  description = '',
  source,
}) {
  return (
    <Layout>
      <Head>
        <title>Blog | X Capitol</title>
      </Head>
      <NextSeo title="Blog | X Capitol" />
      <Box sx={{ p: 4 }}>
        <h1>{title}</h1>
      </Box>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => '/blog/' + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const slug = params.post;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');
  const { content, data } = matter(source, {
    engines: { yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) },
  });
  const mdxSource = await renderToString(content, { scope: data });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: '',
      tags: data.tags,
      author: data.author,
      source: mdxSource,
    },
  };
};
