function checkLove(){
  let name1 = document.getElementById("name1").value;
  let name2 = document.getElementById("name2").value;

  if(name1 === "" || name2 === ""){
    alert("Please enter both names ❤️");
    return;
  }

  let percent = Math.floor(Math.random() * 101);

  let result = document.getElementById("result");
  let gif = document.getElementById("gif");

  result.innerHTML = `💖 Love Percentage: ${percent}%`;

  if(percent < 40){
    gif.src = "gifs/low.gif";
    result.innerHTML += "<br>😢 Thoda mushkil hai";
  }
  else if(percent < 70){
    gif.src = "gifs/love.gif";
    result.innerHTML += "<br>😊 Accha chance hai";
  }
  else{
    gif.src = "gifs/high.gif";
    result.innerHTML += "<br>😍 Perfect match!";
  }
}
