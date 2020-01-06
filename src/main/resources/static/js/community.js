function post() {
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();

    console.log(questionId);
    console.log(content);

    $.ajax({
        type: "POST",
        url: "/comment",
        contentType:"application/json",
        data:JSON.stringify({
            "parentId" :questionId,
            "content" :content,
            "type" : 1
        }),
        success: function (response){
            if(response.code == 200){
                $("#comment_section").hide();
            }else {
                if(response.code == 2003){
                    var isAccept = confirm(response.message);
                    if(isAccept){
                        window.open("https://github.com/login/oauth/authorize?client_id=f786a53908a42504fb30&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                    }
                }else {
                    alert(response.message);
                }

            }
            console.log(response);
        },
        dataType:"json"
    })
}