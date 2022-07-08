let division = document.createElement('div');
division.innerHTML = "<h1>this is a dynamic div</h1>";
division.style.color = "red";
division.style.backgroundColor = "blue";
// division.innerText = "welcome";
division.setAttribute('id','main');
// division.setAttribute('class','sec');
document.body.append(division);

var spantag = document.createElement('span');
spantag.innerText ="welcome to guvi";
spantag.style.color = "pink";
document.body.append(spantag);

let res = document.getElementById('main');
console.log(res);

// const parent = document.createElement('div');
// const child = document.createElement('p');
// parent.innerHTML = "welcome guvi";
// child.innerHTML = "hello B37 students";
// document.body.append(parent,child);




