$(window).on("load",function(){
$(".loading").fadeOut("slow");
});

function sendmail(params){
    var tempParams ={
        from_name:document.getElementById("fromname").value,
        to_name :document.getElementById("toname").value,
        message:document.getElementById("msg").value,
    };
    emailjs.send('1234','template_er6mttn',tempParams)
    .then(function(res){
        alert("Message delivered successfully",res.status)
    })
}