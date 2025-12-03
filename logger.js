const logger = (req, res, next) => { //next keyword allows the program to move on once it's done with the logger. It is very important
    console.log(req.method, req.originalUrl)
    next()
}

module.exports = logger