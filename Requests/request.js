
function sendXmlHttpRequest(){
  var xmlhttp = new XMLHttpRequest();
  var url = "https://www.freecodecamp.org/json/cats.json";
  
  xmlhttp.onload = function() {

      var myArr = JSON.parse(xmlhttp.responseText);
      console.log(myArr);
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}



//---------------------------------------------------


async function sendFetchRequest(){
 const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a7f6f3262mshc8e572aee2b7e0bp1532d5jsn7f98280c17b1',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result.d[1].l);
} catch (error) {
	console.error(error);
} 

}


sendXmlHttpRequest();
sendFetchRequest();