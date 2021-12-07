import { Box, Heading, Text } from 'theme-ui';

const Content = ({ children }) => {
  return <Box className="content">{children}</Box>;
};

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

const Postitem = ({
  title,
  dateString,
  slug,
  tags,
  author,
  content,
  source,
  timeFormatted,
}) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.posts}>
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={{ pl: 1, pt: 2, color: 'gray' }}>{timeFormatted}</Text>
        <Content>
          <div
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Content>

        <Box sx={styles.tags}>
          <ul>
            {tags.map((tag, i) => (
              <li key={i}>
                <a>{capitalize(tag)}</a>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
};

export default Postitem;

const styles = {
  container: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: '1200px',
    width: '100%',
  },

  title: {
    color: 'heading',
    fontWeight: 600,
    fontSize: '2.2em',
    letterSpacing: 'heading',
  },
  posts: {
    margin: '28px 0 0',
    span: {
      fontSize: '0.83255rem',
    },
  },

  tags: {
    ul: {
      display: 'inline-flex',
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
    },

    li: {
      marginRight: '8px',
    },

    a: {
      backgroundColor: 'rgba(242, 242, 242, 1)',
      padding: '5px 10px',
      borderRadius: '3px',
      fontSize: '13px',
      lineHeight: '22px',
      color: 'rgba(117, 117, 117, 1)',
    },
  },
};
