const express=require('express');
const app=express();


var fs = require("fs")


app.get('/',(req,res)=>{
    
    const toPdf = require('mso-pdf')
    var source 		= "./ashishcvback.docx"
    var destination	= "./TestToPDF.pdf"
    toPdf.convert(source,destination,function(errors){
        if(errors) console.log(errors)
        console.log(destination + " converted")
        res.send(destination + " converted")
    })
})
app.listen(3000,()=>{
    console.log('sever at 3000..')
})