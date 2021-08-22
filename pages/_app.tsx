import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Theme from '../lib/hoagie-ui/Theme';
import '../lib/hoagie-ui/theme.css'
import { NextSeo } from 'next-seo';

import './index.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextSeo
      title="Hoagie - the Princeton Application Platform"
      description="Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. We design and develop Hoagie Apps which allow you to use the same profile accross the entire app system."
      canonical="https://hoagie.io/"
      />
      <Theme>
      <Layout name="platform">
      <Component {...pageProps} />
      </Layout>
      </Theme>
    </UserProvider>
  );
}