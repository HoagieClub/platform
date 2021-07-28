import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../src/everpurple/Layout';
import Everpurple from '../src/everpurple/Everpurple';
import '../src/everpurple/style.css'
import { NextSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <NextSeo
      title="Hoagie - the Princeton Application Platform"
      description="Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. We design and develop Hoagie Apps which allow you to use the same profile accross the entire app system."
      canonical="https://hoagie.io/"
      />
      <Everpurple>
      <Layout>
      <Component {...pageProps} />
      </Layout>
      </Everpurple>
    </UserProvider>
  );
}