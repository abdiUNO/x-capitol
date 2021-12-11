import { Box, Container, Text } from 'theme-ui';

const Widget = ({ illustration, content, reverse = false, columns, style }) => {
  return (
    <Container>
      <Box
        sx={{
          ...(reverse ? styles.contentWrapperReverse : styles.contentWrapper),
          ...(style ? style : {}),
        }}>
        {reverse ? (
          <>
            <Box sx={styles.content}>{content}</Box>

            <Box sx={styles.illustration}>
              <div style={{ display: 'block' }}>{illustration}</div>
            </Box>
          </>
        ) : (
          <>
            <Box sx={styles.illustration}>
              <div style={{ display: 'block' }}>{illustration}</div>
            </Box>
            <Box sx={styles.content}>{content}</Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Widget;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  contentWrapperReverse: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['inline-flex', 'inline-flex', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    flexWrap: 'wrap-reverse',
  },
  illustration: {
    p: [6, 6, 0],
    pl: [6, 7, 0, 25],
    pr: [6, 7, 0, 50],
  },
};
