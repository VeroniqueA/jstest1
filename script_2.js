number = -1;
result = 1;

while (number<0){
number = prompt("Choisis un nombre !");
}

for (i = 1; i <= number; i++){
  result = result * i;
  }

console.log(result);
