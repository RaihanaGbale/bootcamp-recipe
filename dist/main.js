const render=new Renderer()

const getData = function (){
    let ingrediantName = $("input").val()
    $.get(`/recipes/${ingrediantName}`, function (data) {
        render.renderRecipes(data)
    })
}
// listener to recipe images
$("#recipes-container").on("click", ".imageclick", function(){
    alert($(this).closest(".OneRecipe").find("li").first().text())
})