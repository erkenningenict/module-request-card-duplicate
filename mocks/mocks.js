const ngApimock = require('ng-apimock')();

ngApimock.run({
  baseUrl: 'http://localhost:4000',
  src: 'mocks/*',
  outputDir: '.tmp/mocks',
  done: function() {
    console.log('produced initial mocks');
  },
});

ngApimock.watch('mocks');

(function serve() {
  const http = require('http'),
    connect = require('connect'),
    ngApiMockRequest = require('ng-apimock/lib/utils').ngApimockRequest;

  const app = connect();

  app.use(ngApiMockRequest);
  app.use('/mocking', require('serve-static')('.tmp/mocks'));
  app.use((req, res) => {
    console.log('incoming request url: ', req.url);
    if (req.url.match('/graphql') !== null) {
      console.log('Inside graphql');
      // Real api endpoint
      const baseUrl = `http://localhost:3010/graphql`;
      const redirectUrl = `${baseUrl}`;
      console.log('redirecting to API: ', redirectUrl);
      // Redirect to the real api endpoint
      res.writeHead(307, {
        Location: redirectUrl,
      });
      res.end();
    }
  });

  http.createServer(app).listen(4000);
})();
