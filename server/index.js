const app=require('./src/app');
const connect=require('./src/config/db');
app.listen(2345,async()=>{
    try
    {
        await connect();
        console.log("Listening on port 2345");
    }
    catch(e)
    {
        console.log(e);
    }
})