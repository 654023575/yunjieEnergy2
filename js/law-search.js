$(".tcdPageCode").createPage({
    pageCount: 6,
    current: 1,
    backFn: function (p) {
        console.log(p);
    }
});
$("#highsearch").click(function(){
    $("#myVar").toggle();
})