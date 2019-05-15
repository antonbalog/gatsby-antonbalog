import React from "react";
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <Head title='Home' />
            <h1>Hello there!</h1>
            <h2>Contact me if you like, cheers!</h2>
            <p>Need help? <Link to='/contact'>Contact me!</Link></p>
        </Layout>
    )
}

export default IndexPage;
