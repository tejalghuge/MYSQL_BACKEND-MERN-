createCategory  =async(req,res)=>{

   console.log(req.body)
       const {name} = req.body
   try {
       const newBrand = await Brand.create(name)
       res.status(200).send({message:'Brand created successfully',success:true})
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}
getAllCategories =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}
getCategoryByID =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}
updateCategory =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}
deleteCategory =(req,res)=>{
    try {
    res.status(200).send({message:'success'})
        
    } catch (error) {
    res.status(500).send({error:error})
        
    }
}




module.exports = {createCategory,
getAllCategories,
getCategoryByID,
updateCategory,
deleteCategory
}