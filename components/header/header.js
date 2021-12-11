import { Box, Button, Container, Flex, MenuButton } from 'theme-ui';
import { useState } from 'react';
import Sticky from 'react-stickynode';
import Logo from '../logo';
import menuItems from './header.data';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const NoScrollLink = ({ children, href, passHref }) => (
  <Link href={href} passHref={passHref} scroll={false}>
    {children}
  </Link>
);

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
                    let isActive;

                    if (
                      router.asPath === `/${path}` ||
                      (path === 'blog' && router.asPath.substr(0, 5) === '/blog')
                    ) {
                      isActive = 'active';
                    } else {
                      isActive = '';
                    }

                    const className = `nav-item ${isActive}`;
                    return (
                      <li key={i}>
                        <NoScrollLink href={`/${path}`}>
                          <a onClick={closeMobileMenu} className={className}>
                            {label}
                          </a>
                        </NoScrollLink>
                      </li>
                    );
                  })}
                  <li>
                    <Button
                      as="a"
                      variant="muted"
                      data-tf-slider="WfMkBbaI"
                      data-tf-iframe-props="title=X Capitol (Contact Us)"
                      target="_blank"
                      sx={{ fontSize: '1rem', marginBottom: '2px' }}
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
          // backgroundColor: 'text',
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
      fontSize: '1.075rem',
      textDecoration: 'none !important',
      cursor: 'pointer !important',
      fontWeight: 500,
      padding: '10px 6px',
      margin: '0 18px 0px 0px !important',
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
