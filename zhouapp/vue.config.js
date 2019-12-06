const list=require('./src/data/list.json')
const bodyparser=require('body-parser')
module.exports={
    devServer:{
        before(app){
            app.post('/list',bodyparser.json(),(req,res)=>{
                let {phone,pwd}=req.body
                let obj=list.filter(item=>item.phone==phone&&item.pwd==pwd)
                if(obj.length>0){
                    res.send({code:200})
                }else{
                    res.send({code:400,msg:'密码或账户错误'})
                }
                
            })
        }
    }
}