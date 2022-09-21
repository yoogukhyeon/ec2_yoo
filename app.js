const express = require('express');
const app = express();


app.set('views' , 'views');
app.set('view engine' , 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})


const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`${port} 포트 포트로 이동중....`)
})



