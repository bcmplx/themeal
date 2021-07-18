const fetch = require('node-fetch')

const categoryController = {

    allRedirection: (req,res) => {
        // console.log(req.originalUrl)
        res.redirect('/' + process.env.VERSION + req.originalUrl)
    },

    home: async (req,res ) => {

        Promise.all([
            fetch(process.env.API_URL + 'random.php').then(value => value.json()),
            fetch(process.env.API_URL + 'random.php').then(value => value.json()),
            fetch(process.env.API_URL + 'random.php').then(value => value.json())
        ])
        .then((value) => {
            // console.log(value[0].meals[0])
            res.render('index', {
                random: value[0].meals[0],
                cat: value[1].meals[0],
                area: value[2].meals[0]
            })
        })
    },

    allCategories: (req,res) => {fetch(process.env.API_URL + 'categories.php')
        .then(response =>response.json())
        .then(data => {
            // console.log(data.categories)
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