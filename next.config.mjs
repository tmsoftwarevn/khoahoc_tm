/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true,
  },
  env: {
    // change url be  ko có / cuối  
    
    URL_BACKEND: 'https://tmaccademia.tmsoftware.vn',

  },
};

export default nextConfig;
