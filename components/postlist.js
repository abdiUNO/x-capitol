import { jsx, Box, Heading } from 'theme-ui';
import { Link } from './link';
import { rgba } from 'polished';

const FooterWidget = ({ posts }) => {
  return (
    <Box sx={styles.listWrapper}>
      <Box sx={styles.posts}>
        <ul className={'post-list'}>
          {posts.map((post, i) => (
            <li key={i}>
              <h4>{post.title}</h4>
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default FooterWidget;

const styles = {
  listWrapper: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',
    padding: '0 1.5rem',

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
    },
  },
};
