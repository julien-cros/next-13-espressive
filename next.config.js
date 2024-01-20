const { withContentlayer } = require('next-contentlayer');
// import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects() {
	  return [
		{
		  source: "/perfect-espresso",
		  destination: "/post/perfect-espresso",
		  permanent: true,
		},
		{
		  source: "/perfect-grinder",
		  destination: "/post/perfect-grinder",
		  permanent: true,
		},
		{
		  source: "/perfect-espresso-machine",
		  destination: "/post/perfect-espresso-machine",
		  permanent: true,
		},
		{
		  source: "/perfect-milk",
		  destination: "/post/perfect-milk",
		  permanent: true,
		},
		{
		  source: "/the-world-of-tamper",
		  destination: "/post/the-world-of-tamper",
		  permanent: true,
		},
	  ];
	},
  };

	module.exports = withContentlayer(nextConfig);