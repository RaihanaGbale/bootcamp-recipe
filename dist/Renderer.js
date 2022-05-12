class Renderer {
    constructor() { }
    renderRecipes(recipes) {
        this.source = $('#recipes-template').html();
        this.recipestemplate = Handlebars.compile(this.source);
        this.newHTML = this.recipestemplate({ recipes });
        $('#recipes-container').append(this.newHTML)
    }
}