const app = require('./src/app');
const port = 1313;

app.listen(port, () =>{
    console.log(`The api is listening on: ${port}`)
})
