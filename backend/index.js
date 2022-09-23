const app = require('./app');

app.listen(process.env.PORT,() => {
  console.log('We are connected!')
  console.log(process.env.PORT)
});
