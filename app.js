var posts = 
[
  ["img/html.jpeg","" ,"Course html in Arabic","#0b1023"],
  ["img/css.jpeg","","Course css in Arabic","#3799d6"],
  ["img/javascript.png","","Course JavaScript in Arabic","#303030"],
  ["img/php-mysql.jpg","","Course PHP and MySQL","#636cd1"]
]
console.log(posts)

var content = document.getElementById("content")
posts.forEach(post =>{
  content.innerHTML += 
  ` <article> 
  <a href="${post[1]}" target="_blank"> 
  <h2 style="background: linear-gradient(
    225deg
    ,${post[3]} 94%, #ffc928 94%);   "> ${post[2]}</h2>
  <img src="${post[0]}" width="100%" />  </a>

   </article>`
})

