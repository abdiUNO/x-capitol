import { Box, Container, Text } from 'theme-ui';
import Logo from '../logo';
import { Link } from '../link';
import FooterWidget from '../FooterWidget';
import { footerNav, menuItems } from './footer.data';
import { rgba } from 'polished';

export default function Footer() {
  return (
    <Box as="footer" variant="layout.footer">
      <Container>
        <Box sx={styles.footerTopInner}>
          {menuItems.map(({ id, title, items }) => (
            <FooterWidget key={id} title={title} items={items} />
          ))}
        </Box>
      </Container>
      <Container>
        <Box sx={styles.footerInner}>
          <Box sx={styles.copyright}>
            <Logo />
            <Text as="span">Copyright by {new Date().getFullYear()} X Capitol</Text>
          </Box>

          <Box as="ul" sx={styles.footerNav}>
            {footerNav.map(({ path, label }, i) => (
              <li key={i}>
                <Link
                  path={path}
                  key={i}
                  variant="footer"
                  className={`socialicons accent-bg ${label}`}
                  target="_blank"
                />
              </li>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  footerTopInner: {
    gap: [50, null, null, null, 17, 50],
    mb: [50],
    display: ['grid'],
    gridTemplateColumns: [
      'repeat(2, 1fr)',
      null,
      null,
      'repeat(3, 1fr)',
      'repeat(5, 1fr)',
    ],
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px',
    '@media only screen and (max-width: 400px)': {
      pb: 10,
    },
  },
  copyright: {
    display: ['flex'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      fontSize: '14px',
      lineHeight: 1.29,
      color: rgba('#0F2137', 0.6),
      mt: ['18px', '18px', '7px'],
    },
  },
  footerNav: {
    listStyle: 'none',
    margin: ['15px 0 0', '15px 0 0', '0'],
    padding: 0,
    display: ['flex'],
    flexWrap: ['wrap', null, null, 'unset'],
    justifyContent: ['center', null, 'flex-start'],
    'li + li': {
      ml: ['18px', '18px', '20px'],
      '@media only screen and (max-width: 400px)': {
        mb: '10px',
      },
    },
    a: {
      color: 'textSecondary',
    },
  },
};
