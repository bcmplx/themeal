const fetch = require('node-fetch')

const categoryController = {

    allRedirection: (req,res) => {
        // console.log(req.originalUrl)
        res.redirect('/' + process.env.VERSION + req.originalUrl)
    },

    home: (req,res) => {
        // console.log(req.route.path)
        res.render('index')
    },

    allCategories: (req,res) => {fetch(process.env.API_URL + 'categories.php')
        .then(response =>response.json())
        .then(data => {
            res.render('categories', {
                data: data.categories
            })
        })
    
    },
    oneCategory: (req,res, id) => {
        //  console.log(req.params.id)
        fetch(process.env.API_URL + 'filter.php?c=' + req.params.id)
        .then(response =>response.json())
        .then(data => {
            // console.log(data)
            res.render('category', {
                data: data.meals
            })
        })   
    },
    oneMeal: (req,res, id) => {
        //  console.log(req.params.id)
        fetch(process.env.API_URL + 'search.php?s=' + req.params.id)
        .then(response =>response.json())
        .then(data => {
            // console.log(data.meals)
            res.render('meal', {
                data: data.meals[0]
            })
        })   
    },

    randomMeal: (req,res, id) => {
        //  console.log(req.params.id)
        fetch(process.env.API_URL + 'random.php')
        .then(response =>response.json())
        .then(data => {
            // console.log(data.meals)
            res.render('meal', {
                data: data.meals[0]
            })
        })   
    },

    allAreas: (req,res, id) => {
        //  console.log(req.params.id)
        fetch(process.env.API_URL + 'list.php?a=list')
        .then(response =>response.json())
        .then(data => {
            // console.log(data.meals)
            res.render('areas', {
                data: data.meals
            })
        })   
    },

    oneArea: (req,res, id) => {
        //  console.log(req.params.id)
        fetch(process.env.API_URL + 'filter.php?a=' + req.params.id)
        .then(response =>response.json())
        .then(data => {
            // console.log(data.meals)
            res.render('area', {
                data: data.meals
            })
        })   
    },
}

module.exports = categoryController;