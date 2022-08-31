import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Footer from '../lib/hoagie-ui/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import Nav from '../lib/hoagie-ui/Nav';
import '../lib/hoagie-ui/theme.css'
import { NextSeo } from 'next-seo';

import './index.css'

function Content({ Component, pageProps }) {
    const user = useUser();

    return (
        <Theme palette="orange">
            <Layout>
                <Nav name="mail" user={user} />
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </Theme>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <NextSeo
            title="Hoagie - the Princeton Application Platform"
            description="Hoagie is more than just a couple of different campus applications; it is an integrated system. Every application is built with others in mind, filling different gaps in your campus experience. We design and develop Hoagie Apps which allow you to use the same profile accross the entire app system."
            canonical="https://hoagie.io/"
            />
            <Content Component={Component} pageProps={pageProps} />
        </UserProvider>
    );
}
