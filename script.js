
const body = document.getElementById('root');

var request = new XMLHttpRequest();
request.open("GET","https://ghibliapi.herokuapp.com/films");
request.onload =()=>{
	var response = JSON.parse(request.responseText);
	// response.forEach(movie=>{
		
	// 	const card = document.createElement('div');
 //      card.setAttribute('class', 'card');
 //      const i = document.createElement('i');

 //      const h1 = document.createElement('h1');
 //      i.textContent = movie.title;
 //      const br = document.createElement('br');

 //      const p = document.createElement('p');
 //      movie.description = movie.description.substring(0, 300);
 //      p.textContent = `${movie.description}...`;

 //      body.appendChild(card);
 //      card.appendChild(h1);
 //      h1.appendChild(i);
 //      card.appendChild(br);
 //      card.appendChild(p);

	// })
};
request.send();
function call(){
const body = document.getElementById('root');
var request = new XMLHttpRequest();
// request.open("GET","https://ghibliapi.herokuapp.com/films");
request.open("GET",'https://script.google.com/macros/s/AKfycbyjWNmmYEKNpnIrWdTLF7eGJXDxUigirttCJxAvlA/exec');
request.onload =()=>{
      var response = JSON.parse(request.responseText);
      console.log(response.user[0]);
      var divOne = document.createElement('div');
      divOne.setAttribute('class','entryOne');
      var divOneParaOne = document.createElement('p');
      var divOneParaTwo = document.createElement('p');
      var divOneParaThree = document.createElement('p');
      divOneParaOne.textContent  = 'Name: Suyash';
      divOneParaTwo.textContent  = 'aGE:123';
      divOneParaThree.textContent  = 'PRESCRIPTION......';
      root.appendChild(divOne);
      divOne.appendChild(divTwoParaOne);
      divOne.appendChild(divOneParaTwo);
      divOne.appendChild(divOneParaThree);

      var divTwo = document.createElement('div');
      divTwo.setAttribute('class','entryTwo');
      var divTwoParaOne = document.createElement('p');
      var divTwoParaTwo = document.createElement('p');
      var divTwoParaThree = document.createElement('p');
      divTwoParaOne.createElement('a');
      divTwoParaTwo.createElement('a');
      root.appendChild(divTwo)
      }
      request.send()
}