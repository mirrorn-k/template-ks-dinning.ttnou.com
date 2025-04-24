import path from 'path';
import { fileURLToPath } from 'url';
import type { Configuration as WebpackConfig } from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackConfig): WebpackConfig => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        src: path.resolve(__dirname, 'src'), 
        '@': path.resolve(__dirname, 'src'), 
      },
    };
    return config;
  },
};

export default nextConfig;
