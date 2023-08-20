$(document).ready(() => {
    /*Search Function*/
    $("div.search_box>#myInput").keyup(() => {
        let a = $("#myInput").val();
        let f0 = $("#myUL2>li>div").length;
        console.log(f0);
        if (a !== "") {
            $("#myUL2>li>div").addClass("display-none");
            let search, name;
            for (let i = 0; i < f0; i++) {
                search = $("#myUL2>li>div").eq(i);         //Truy cập phần tử i
                name = search.find("#book_on_shelf_names").text();
                
                if (name.toUpperCase().indexOf(a.toUpperCase()) >= 0)
                    $("#myUL2>li>div").eq(i).removeClass("display-none");
            }
        }
        else
            $("#myUL2>li>div").removeClass("display-none");
    });
    /*filter function*/
    $("#myUL1 li>a").click(function () {
        let find = $(this).attr("href");
        find = find.replace(/[_]/g, ' ');
        find = find.replace('#', '');
        $("#myInput").val(`${find}`);
        let a = $("#myInput").val();
        if (a !== "") {
            $("#myUL2>li>div").addClass("display-none");
            let search, name;
            for (let i = 0; i < $("#myUL2>li>div").length; i++) {
                search = $("#myUL2>li>div").eq(i);
                name = search.find("#book_on_shelf_names").text();
                if (name.indexOf(a) >= 0)
                    $("#myUL2>li>div").eq(i).removeClass("display-none");
            }
        }
        else
            $("#myUL2>li>div").removeClass("display-none");
    })

})