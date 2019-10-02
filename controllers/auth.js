
const getLogin = (req, res, next)=>{
    res.render('login', {
        pageTitle: 'Login in to Node App',
        loginPage:true
    });
}


const postLogin = (req, res, next)=>{

    // Cookies = Client side data (stored in visitors browser)
    //setting the cookie to logged in 
    // res.cookie('loggedIn',"true", { 
    //     maxAge: 900000, 
    //     //basically it means you cannot set this cookie from Javascript
    //     httpOnly: true,
    //     // cookie will be only when server is https
    //     // secure: true
    // });

    // Sessions = Server side data (are stored on server)
    // The session is stored on the server but it needs a cookie to store an 
    // indicator of who is requesting the session value.
    req.session.isLoggedIn = true;

    res.redirect('/');
}


exports.getLogin = getLogin;
exports.postLogin = postLogin;