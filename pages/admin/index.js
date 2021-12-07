import dynamic from 'next/dynamic';
import { Box, Container, Flex, Spinner, Text } from 'theme-ui';

const CMS_CONFIG = {};
const Loading = () => (
  <Box
    as="section"
    id="about-us"
    variant="section.aboutUs"
    style={{ overflow: 'scroll' }}>
    <Container>
      <Flex sx={{ flex: 1, minHeight: '100vh' }}>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text sx={{ pb: 7 }}>
            <Spinner />
          </Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);

const CMS = dynamic(
  () =>
    import('netlify-cms-app').then((CMS) => {
      CMS.init({ CMS_CONFIG });
    }),
  { ssr: false, loading: Loading }
);

const Admin = () => {
  return <CMS />;
};
export default Admin;
