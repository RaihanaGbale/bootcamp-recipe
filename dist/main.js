const render=new Renderer()
//ust add a listener to images
//$(.imageclick).onClick()
const getData = function (){
    let ingrediantName = $("input").val()
    $.get(`/recipes/${ingrediantName}`, function (data) {
        render.renderRecipes(data)
    })
}