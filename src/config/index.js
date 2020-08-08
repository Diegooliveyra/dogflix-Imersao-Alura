const URLBACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://dogflix-alura.herokuapp.com';

export default {
  URLBACKEND,
};
