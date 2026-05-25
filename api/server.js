import server from '../dist/server/server.js';

export default {
  async fetch(request) {
    try {
      return await server.fetch(request);
    } catch (error) {
      console.error('Serverless handler error:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};
