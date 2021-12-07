import { Box, Divider, Heading, Paragraph, Text } from 'theme-ui';
import { rgba } from 'polished';

import Pagination from './pagination';
import AnimateWhenVisible from './AnimateWhenVisible';
import { motion } from 'framer-motion';
import { NoScrollLink } from './header/header';

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const postVariants = {
  initial: { scale: 0.96, y: 30, opacity: 0 },
  enter: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
  },
  exit: {
    scale: 0.6,
    y: 100,
    opacity: 0,
    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
  },
};
const transition = { duration: 0.5, ease: 'easeInOut' };

const PostList = ({ posts, pagination }) => {
  return (
    <Box sx={styles.listWrapper}>
      <Box sx={styles.posts}>
        <ul className={'post-list'}>
          {posts.map((post, i) => {
            if (post.tags.length > 0) post.tags[0] = capitalize(post.tags[0]);

            const tags =
              post.tags.length === 1
                ? capitalize(post.tags[0])
                : post.tags.reduce((prev, curr) => `${prev}, ${capitalize(curr)}`);
            return (
              <li key={i}>
                <AnimateWhenVisible
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        type: 'spring',
                        damping: 15,
                        bounce: 0.4,
                        duration: 0.8,
                      },
                    },
                    enter: {
                      scale: 1,
                      y: 0,
                      opacity: 1,
                      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
                    },
                    exit: {
                      scale: 0.6,
                      y: 100,
                      opacity: 0,
                      transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
                    },
                  }}>
                  {/*<Link href={`/blog/${post.slug}`}>*/}

                  <NoScrollLink href={`/blog/${encodeURIComponent(post.slug)}`}>
                    <a className="itemlink">
                      <Heading sx={styles.title}>{post.title}</Heading>
                      <Paragraph>{post.description}&#8230;</Paragraph>
                      <Text as={'small'} sx={{ color: 'gray' }}>
                        {post.timeFormatted} | {tags}
                      </Text>
                      {i !== posts.length - 1 && <Divider />}
                    </a>
                  </NoScrollLink>

                  {/*</Link>*/}
                </AnimateWhenVisible>
              </li>
            );
          })}
        </ul>
      </Box>
      <Pagination
        current={pagination.current}
        pages={pagination.pages}
        link={{
          href: (page) => (page === 1 ? '/blog' : '/blog/page/[page]'),
          as: (page) => (page === 1 ? null : '/blog/page/' + page),
        }}
      />
    </Box>
  );
};

export default PostList;

const styles = {
  title: {
    color: 'heading',
    fontWeight: 600,
    fontSize: '1.7em',
    letterSpacing: 'heading',
  },

  listWrapper: {
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',
  },

  posts: {
    ul: {
      minHeight: '75vh',
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,

      li: {
        listStyle: 'none',
      },

      a: {
        color: rgba('#02073E', 0.8),
      },
      p: {
        mt: 1,
        mb: 1,
      },

      '.itemlink': {
        cursor: 'pointer',
      },
      span: {
        fontSize: 15,
        opacity: 0.9,
      },

      hr: {
        mt: 5,
        mb: 6,
      },
    },
  },
};
