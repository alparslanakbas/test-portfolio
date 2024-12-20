import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'export', 
    images: {
        unoptimized: true 
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 
};

export default withNextIntl(withMDX(nextConfig));