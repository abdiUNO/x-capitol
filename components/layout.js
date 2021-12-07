import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 100 },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeInOut' },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: { duration: 0.2, ease: 'easeInOut' },
  },
};

export default function Layout({ children, animate = false }) {
  return (
    <div>
      <Header />
      {animate ? (
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
          className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                ">
          <main
            sx={{
              variant: 'layout.main',
            }}>
            {children}
          </main>
        </motion.main>
      ) : (
        <main
          sx={{
            variant: 'layout.main',
          }}>
          {children}
        </main>
      )}

      <Footer />
    </div>
  );
}
