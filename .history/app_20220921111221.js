const express = require('exress');
const app = express();


app.get('/', (req, res) => {
    res.send('EC2 서버')
})




const port = process.env.PORT || 3000;
app.listen(port => {
    console.log(`${port} 포트 포트로 이동중....`)
})