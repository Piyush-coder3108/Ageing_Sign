const express= require('express');
const upload= require('express-fileupload');
const expressLayouts= require('express-ejs-layouts');
const app=express();


const PORT=process.env.PORT || 4000;


// Serving Static folder
app.use(express.static('./assets/'));

// For uploading file
app.use(upload());



// Using ejs layout
app.use(expressLayouts);


//Setting view engine
app.set('view engine','ejs');
app.set('views','./views');





app.get('/',(req,res)=>{
    res.render('home_page');
});

app.get('/upload',(req,res)=>{
    res.render('upload');
})

app.post('/upload',(req,res)=>{
    if(req.files){
        var file=req.files.uploaded_image;
        var filename=file.name;
        file.mv('./temp/'+filename,(err,result)=>{
            if(err) { console.log(error)}
            else{
                
            }
        })
        res.send("Uploaded");
    }
    else{
    res.send("Not uploaded");}
})

app.listen(PORT,(err)=>{
    if(err){ console.log(err)}
    else{
        console.log(`Server running on PORT: ${PORT}`);
    }
})