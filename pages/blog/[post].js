import { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import matter from 'gray-matter';
import fs from 'fs';
import yaml from 'js-yaml';
import moment from 'moment';
import { markdownToHtml } from '../../lib/markdown';
import { Box, Container } from 'theme-ui';
import Layout from '../../components/layout';
import Postitem from '../../components/postitem';
import Script from 'next/script';
import { fetchPostContent } from '../../lib/posts';
import { motion } from 'framer-motion';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';

let easing = [0.175, 0.85, 0.42, 0.96];

const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

export default function PostPage(props) {
  const url = `/blog/${props.slug}`;
  console.log();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout animate={true}>
      <BasicMeta
        url={url}
        description={props.description}
        title={props.title}
        type="article"
        publishedTime={props.dateString}
        keywords={props.tags && props.tags.length > 0 && props.tags}
      />
      <Script src="//embed.typeform.com/next/embed.js" />
      <Box sx={{ p: 1, minHeight: '100vh' }}>
        <Container>
          <motion.div initial="exit" animate="enter" exit="exit">
            <Box sx={styles.contentWrapper}>
              <motion.div variants={textVariants}>
                <Postitem {...props} />
              </motion.div>
            </Box>
          </motion.div>
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
      tags: data.tags,
      content: contentHtml,
      source: mdxSource,
      timeFormatted: moment(data.date).fromNow(),
    },
  };
}
