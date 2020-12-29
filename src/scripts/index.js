import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://server.com';

console.warn('BASE_URL: ' + BASE_URL);

