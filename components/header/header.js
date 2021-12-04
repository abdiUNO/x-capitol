import { jsx, Box, Container, MenuButton, Flex, Button } from 'theme-ui';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import Sticky from 'react-stickynode';
import Logo from '../logo';
import { NavLink } from '../link';
import menuItems from './header.data';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          variant="layout.header"
          className={mobileMenu ? 'is-mobile-menu' : ''}>
          <Container>
            <Box sx={styles.headerInner}>
              <Logo isWhite={mobileMenu} />

              <Flex
                as="nav"
                sx={styles.navbar}
                className={mobileMenu ? 'navbar active' : 'navbar'}>
                <Box as="ul" sx={styles.navList} className={mobileMenu ? 'active' : ''}>
                  {menuItems.map(({ path, label }, i) => {
                    const className = `nav-item ${
                      router.asPath === '/' + path ? 'active' : ''
                    }`;
                    return (
                      <li key={i}>
                        <a
                          href={`/${path}`}
                          onClick={closeMobileMenu}
                          className={className}>
                          {label}
                        </a>
                      </li>
                    );
                  })}
                  <li>
                    <Button
                      as="a"
                      variant="muted"
                      href="mailto:funding@xcapitol.net?subject=Request For Consultation"
                      onClick={closeMobileMenu}>
                      Contact
                    </Button>
                  </li>
                </Box>
                {/*<Button variant="primaryMd" sx={styles.explore}>*/}
                {/*  Explore Now*/}
                {/*</Button>*/}
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <MenuButton
                    aria-label="Toggle Menu"
                    onClick={closeMobileMenu}
                    color="white"
                  />
                </Button>
              ) : (
                <MenuButton aria-label="Toggle Menu" onClick={openMobileMenu} />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  headerWrapper: {
    backgroundColor: 'transparent',
    transition: '0.3s ease-in-out 0s',
    '.is-sticky': {
      header: {
        backgroundColor: '#fff',
        boxShadow: '0 6px 13px rgba(38, 78, 118, 0.1)',
        py: [12],
        '&.is-mobile-menu': {
          backgroundColor: 'text',
        },
      },
    },
  },
  headerInner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media only screen and (max-width: 768px)': {
      '.navbar': {
        position: 'absolute',
        top: '100%',
        backgroundColor: '#fff',
        width: '100%',
        left: 0,
        p: '20px 30px',
        display: 'block',
        boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
        opacity: 0,
        visibility: 'hidden',
        minHeight: 'calc(100vh - 77px)',
        transition: 'all 0.3s ease-in-out 0s',
        '&.active': {
          opacity: 1,
          visibility: 'visible',
        },
        ul: {
          display: 'block',
          'li + li': {
            marginTop: 5,
          },
          a: {
            color: '#343d48',
          },
          '.active': {
            color: 'primary',
          },
        },
      },
    },
  },
  navbar: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  navList: {
    display: ['flex'],
    listStyle: 'none',
    marginLeft: 'auto',
    alignItems: 'center',
    p: 0,
    '.nav-item': {
      textDecoration: 'none !important',
      cursor: 'pointer !important',
      fontWeight: 400,
      padding: 0,
      margin: '0 20px !important',
      color: '#343d48',
    },
    '.active': {
      color: 'primary',
    },
  },
  explore: {
    display: ['block', 'block', 'block', 'block', 'none'],
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: 'translateX(-50%)',
  },
  closeButton: {
    padding: '5px',
    minHeight: 'auto',
    width: '32px',
    mr: '4px',
    display: ['block', null, null, null, 'none'],
    path: {
      fill: '#000',
    },
  },
};
