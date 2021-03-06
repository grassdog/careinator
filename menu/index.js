$(function(){
    $.get("../services.json", function(data){
        /*<div data-id="%id%" class="list-group-item clearfix">
            <div class="col-xs-4">
                <img src="%image%" style="width:100%">
                    </div>
                    <div class="col-xs-6" style="font-size: 24px; line-height: 24px;">
                        %title%
                            </div>
                            <div class="col-xs-2 glyphicon glyphicon-ok" style="font-size: 24px; color: #FFFFFF"></div>
                                </div>*/
        var base_html = "<div data-id=\"%id%\" class=\"list-group-item clearfix\">\r\n            <div class=\"col-xs-4\">\r\n                <img src=\"%image%\" style=\"width:100%\">\r\n                    <\/div>\r\n                    <div class=\"col-xs-6\" style=\"font-size: 24px; line-height: 24px;\">\r\n                        %title%\r\n                            <\/div>\r\n                            <div class=\"col-xs-2 glyphicon glyphicon-ok\" style=\"font-size: 24px; color: #FFFFFF\"><\/div>\r\n                                <\/div>";
        for (i in data) {
            var html = base_html.replace("%image%", data[i].img).replace("%title%", data[i].title);
            $(".list-group").append(html);
        }
        $(".list-group-item").click(function() {
            $(this).toggleClass("active");
        });
    });
});