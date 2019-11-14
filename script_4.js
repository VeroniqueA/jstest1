const entrepreneurs = [
{ first: 'Steve', last: 'Jobs', year: 1955 },
{ first: 'Oprah', last: 'Winfrey', year: 1954 },
{ first: 'Bill', last: 'Gates', year: 1955 },
{ first: 'Sheryl', last: 'Sandberg', year: 1969 },
{ first: 'Mark', last: 'Zuckerberg', year: 1984 },
{ first: 'Beyonce', last: 'Knowles', year: 1981 },
{ first: 'Jeff', last: 'Bezos', year: 1964 },
{ first: 'Diane', last: 'Hendricks', year: 1947 },
{ first: 'Elon', last: 'Musk', year: 1971 },
{ first: 'Marissa', last: 'Mayer', year: 1975 },
{ first: 'Walt', last: 'Disney', year: 1901 },
{ first: 'Larry', last: 'Page', year: 1973 },
{ first: 'Jack', last: 'Dorsey', year: 1976 },
{ first: 'Evan', last: 'Spiegel', year: 1990 },
{ first: 'Brian', last: 'Chesky', year: 1981 },
{ first: 'Travis', last: 'Kalanick', year: 1976 },
{ first: 'Marc', last: 'Andreessen', year: 1971 },
{ first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Entrepreneurs nés dans les années 70");
entrepreneurs.forEach(entrepreneur => {
	if (Number(entrepreneur.year)<=1979 && Number(entrepreneur.year)>=1970) {
		console.log(`${entrepreneur.first} né en ${entrepreneur.year}`);
	}
});

console.log("Array de tous les entrepreneurs");
let arrayEntrepreneurs = [] ;
entrepreneurs.forEach(entrepreneur => {
	arrayEntrepreneurs.push(`{ ${entrepreneur.first} , ${entrepreneur.last} }`);
});

console.log(arrayEntrepreneurs);

console.log("Age des entrepreneurs en 2019");
entrepreneurs.forEach(entrepreneur => {
	console.log(`${entrepreneur.first} a ou aurait ${2019-Number(entrepreneur.year)} ans`);
});

console.log("Entrepreneurs par ordre alphabétique");
let arrayEntrepreneursAlpha = [];
entrepreneurs.forEach(entrepreneur => {
	arrayEntrepreneursAlpha.push(`${entrepreneur.last}`);
});

console.log(arrayEntrepreneursAlpha.sort());
