/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        domains : ["lh3.googleusercontent.com" , "firebasestorage.googleapis.com"]
    },   
}

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
});

webpack: config => {
    config.ignoreWarnings = [
      { module: /node_modules\/node-fetch\/lib\/index\.js/ },
      { file: /node_modules\/node-fetch\/lib\/index\.js/ },
    ];
  
    return config;
  }

module.exports = nextConfig
