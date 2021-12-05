import { jsx, Box, Heading, Paragraph, Text, Divider } from 'theme-ui';
import { Link } from './link';
import { rgba } from 'polished';

function truncate(str, n, useWordBoundary) {
  if (str.length <= n) {
    return str;
  }
  const subString = str.substr(0, n - 1); // the original check
  return useWordBoundary ? subString.substr(0, subString.lastIndexOf(' ')) : subString;
}
const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
const FooterWidget = ({ posts }) => {
  return (
    <Box sx={styles.listWrapper}>
      <Box sx={styles.posts}>
        <ul className={'post-list'}>
          {posts.map((post, i) => {
            const tags =
              post.tags.length === 1
                ? capitalize(post.tags[0])
                : post.tags.reduce((prev, curr) => `${prev}, ${capitalize(curr)}`);
            return (
              <li key={i}>
                <Heading sx={styles.title}>{post.title}</Heading>
                <Paragraph>{truncate(post.content, 135, true)}&#8230;</Paragraph>
                <Text sx={{ color: 'gray' }}>
                  {post.timeFormatted} | {tags}
                </Text>
                {i !== posts.length - 1 && <Divider />}
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  title: {
    color: 'heading',
    fontWeight: 600,
    letterSpacing: 'heading',
  },

  listWrapper: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',

    ul: {
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
