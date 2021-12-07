import { Box, Divider, Heading, Paragraph, Text } from 'theme-ui';
import { rgba } from 'polished';

import Pagination from './pagination';

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const FooterWidget = ({ posts, pagination }) => {
  return (
    <Box sx={styles.listWrapper}>
      <Box sx={styles.posts}>
        <ul className={'post-list'}>
          {posts.map((post, i) => {
            // const tags =
            //   post.tags.length === 1
            //     ? capitalize(post.tags[0])
            //     : post.tags.reduce((prev, curr) => `${prev}, ${capitalize(curr)}`);
            return (
              <li key={i}>
                {/*<Link href={`/blog/${post.slug}`}>*/}
                <a href={`/blog/${post.slug}`}>
                  <Heading sx={styles.title}>{post.title}</Heading>
                  <Paragraph>{post.description}&#8230;</Paragraph>
                  <Text as={'small'} sx={{ color: 'gray' }}>
                    {post.timeFormatted}
                  </Text>
                  {i !== posts.length - 1 && <Divider />}
                </a>
                {/*</Link>*/}
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

export default FooterWidget;

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
