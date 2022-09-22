const express = require('express');
const app = express();
const cors = require('cors');
let db_config = require(__dirname + '/config/database.js');
let conn = db_config.init();

db_config.connect(conn);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.set('views' , 'views');
app.set('view engine' , 'ejs');

app.get('/', async (req, res) => {
    try{

        let sql = 'SELECT * FROM board';  
        conn.query(sql, function (err, rows, fields) {
            if(err) console.log("Error", err);
        
            res.render('index', {list : rows});
        });
        
    }catch(err){
        console.log('Error', err);
    };
    
});

app.post('/board', async (req, res) => {
   
    const {title, content} = req.body;

    try{
    
        var sql = 'INSERT INTO board(title, content) VALUES(?, ?)';
        var params = [title, content];
        
        conn.query(sql, params, (err) => {
            if(err) console.log("Error", err);
            res.redirect('/');
        });

     
    }catch(err){
        console.log("Error", err)
        throw err;
    }
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`${port} 포트 포트로 이동중....`)
})



