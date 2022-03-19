var topMenu = $(".nav"),
topMenuHeight = topMenu.outerHeight()+15,
menuItems = topMenu.find("a"),
scrollItems = menuItems.map(function(){
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});

$(window).scroll(function(){
    var fromTop = $(this).scrollTop()+topMenuHeight;
    var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
        return this;
    });
    cur = cur[cur.length-1];
    var id = cur && cur.length ? cur[0].id : "";
    menuItems
        .parent().removeClass("actives")
        .end().filter("[href='#"+id+"']").parent().addClass("actives");
});