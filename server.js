const express = require(`express`)
const path = require(`path`)
const urllib = require(`urllib`)

const port = 8080
const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))


const loadRecipes = function (recipesData) {
    Recipes = recipesData.map(recipe => {
        return {
            title: recipe.title,
            thumbnail: recipe.thumbnail,
            ingredients: recipe.ingredients,
            href: recipe.href
        }
    })
}

app.get('/sanity', function (request, response) {
    response.send("OK")
})

app.get("/recipes/:ingredient", function (request, response) {
    const yourIngredient = request.params.ingredient
   // let recipesData = []
    console.log(yourIngredient)
    let apiURL = `https://recipes-goodness.herokuapp.com/recipes/${yourIngredient}`
    urllib.request(apiURL, function (err, data, res) {
        if (err) { throw err; }
        loadRecipes(JSON.parse(data).results)
        /* console.log(Recipes) */
        response.send(Recipes)

     })
})


app.listen(port, function () {
    console.log(`The server on port ${port} is listening`)
})