import React from 'react';
import Layout from './src/components/Layout';
import { ContextProvider } from './src/components/Context'

export function wrapPageElement({ element, props }) {
    return <Layout {...props}>{element}</Layout>;
}

export const wrapRootElement = ({ element }) => {
    return <ContextProvider>{element}</ContextProvider>
}