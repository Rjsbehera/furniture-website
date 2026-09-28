let sliderCreate=(req,res)=>{
    res.send(
        {
            status:true,
            msg:"create slider"
        }
    )
}

let sliderView=(req,res)=>{
    res.send(
        {
            status:true,
            msg:"view slider"
        }
    )
}

let sliderDelete=(req,res)=>{
    res.send(
        {
            status:true,
            msg:"delete slider"
        }
    )
}

let sliderUpdate=(req,res)=>{
    res.send(
        {
            status:true,
            msg:"update slider"
        }
    )
}

module.exports={sliderCreate,sliderView,sliderDelete,sliderUpdate}