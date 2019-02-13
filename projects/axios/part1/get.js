var axios = require("axios");

axios.get("https://api.vschool.io/waylon/todo").then(function(response){
    console.log(response.data)
    for(var i = 0; i < response.data.length; i++){
    // document.getElementById("get").innerHTML += response.data[i].title + "<br>";
    
    if(response.data[i].completed === true){
        // var idkYet = response.data.title
        document.getElementById("get").innerHTML += response.data[i].title.strike() + "<br>"
    } else{
        document.getElementById("get").innerHTML += response.data[i].title + "<br>";
    }
}
})