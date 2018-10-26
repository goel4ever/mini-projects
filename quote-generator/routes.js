module.exports = function(app, db) {
  coreRoutes(app);
};

function coreRoutes(app) {
  app.get('/quote', (req, res) => {
    res.send('Random Quote!');
  });
}