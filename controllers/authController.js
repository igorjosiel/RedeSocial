const renderLoginPage = (req, res, next) => {
    res.render('login.ejs');
}

module.exports = {
    renderLoginPage,
}