 const createBrand = (req,res)=>{
try {
    res.status(200).send({message:'success'})
} catch (error) {
    res.status(500).send({error:error})
}
}

 const getAllBrands =(req,res)=>{
    try {

    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}


 const getBrandByID =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}

 const updateBrand = (req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}

 const deleteBrand =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}

module.exports = {
    createBrand, getAllBrands, getBrandByID, updateBrand, deleteBrand
}