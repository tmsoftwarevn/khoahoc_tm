/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true,
  },
  env: {
    // change url be  ko có / cuối  
    
    URL_BACKEND: 'http://localhost:8086',

    //URL_BACKEND: 'https://be.tmbook.vn',
    API_KEY_EDITOR: 'vsoxs499b7om3973v4xlmijk4ipjy5o2ltgvgcww0wylqfpm'

  },
};

export default nextConfig;
