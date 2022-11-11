const usersMiddleware = (req,res,next) => {
 const users =[
    "ada", 
    "greta",
    "vim",
    "tim"]

 const user = req.query.user?.toLowerCase()

 if(users.includes(user)){
    req.user = user;
    return next()  
 }
 else{
    res.render("error", {
        message:"no tienes privilegios para ingresar",
        error: {
            status: 401
        },
        path: req.url

    })
 }
}



module.exports = usersMiddleware