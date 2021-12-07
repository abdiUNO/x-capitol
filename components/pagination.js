import { Box } from 'theme-ui';
import { generatePagination } from '../lib/pagination';
import Link from 'next/link';

const Content = ({ children }) => {
  return <Box className="content">{children}</Box>;
};

const Pagination = ({ current, pages, link }) => {
  const pagination = generatePagination(current, pages);
  return (
    <Box sx={styles.container}>
      <Box as="ul" sx={styles.list}>
        {pagination.map((it, i) => (
          <Box as="li" sx={styles.listItem} key={i}>
            {it.excerpt ? (
              '...'
            ) : (
              <Link href={link.href(it.page)} as={link.as(it.page)}>
                <a className={it.page === current ? 'active' : null}>{it.page}</a>
              </Link>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Pagination;

const styles = {
  container: {
    display: 'flex',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  list: {
    listStyle: 'none',
    margin: '3rem 0 0 0',
    padding: 0,
  },

  listItem: {
    display: 'inline-block',
    marginRight: '1.75em',
    color: '#9b9b9b',
    fontSize: '1.2rem',

    a: {
      '&.active': {
        backgroundColor: 'primary',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 2,
        paddingBottom: 2,
        color: '#fff',
        borderWidth: 1,
        borderColor: 'primary',
        borderStyle: 'solid',
        borderRadius: '5px',
        fontWeight: 'bold',
      },

      '&.active:hover': {
        color: '#fff',
        borderRadius: '5px',
      },

      '&:hover': {
        color: 'dark',
        fontWeight: 'bold',
      },
    },
  },
};
