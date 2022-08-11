function bilanganGanjil(jumlah) {
  let bilanganGanjil = [];
  let count = 0;
  for (let i = 0; true; i++) {
    if (i % 2 === 1) {
      count++;
      bilanganGanjil.push(i);
    }
    if (count === jumlah) {
      break;
    }
  }
  return bilanganGanjil;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function bilanganPrima(jumlah) {
  let bilanganPrima = [];
  let count = 0;
  for (let i = 1; true; i++) {
    if (i !== 1) {
      if (isPrime(i)) {
        count++;
        bilanganPrima.push(i);
      }
    }
    if (count === jumlah) {
      break;
    }
  }
  return bilanganPrima;
}

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  console.log(result);
  return result;
}

function sumAkarKuadrat(num){
    let sum=0;
    for(let i=1; i<=num; i++){
        sum += (1/Math.sqrt(i))+Math.sqrt(i+1)
    }

    return sum
}

function bunga(saldo, tahun) {
  return saldo * 0.005 * tahun + saldo;
}

function checkString(text, setentce){
    return setentce.includes(text)
}

// PSEUDO CODE
// 1. Buat function bilanganGanjil
const hasilbBilanganGanjil = bilanganGanjil(100);
console.log("Bilangan ganjil ", hasilbBilanganGanjil);

// 2. Buat function bilanganPrima
const hasilBilanganPrima = bilanganPrima(100);
console.log("Bilangan Prima ", hasilBilanganPrima);

// 3. Factorial
const hasiFactorial = factorial(5);
console.log("Hasil Factorial ", hasiFactorial);

// 4. sum deret
// console.log("Akar Kuadrat ", sumKuadrat(4));
console.log("Akar Kuadrat ", sumAkarKuadrat(10));

// 5. bunga
const total = bunga(100, 1);
console.log(total);

// 6. Check String
console.log("Check String ", checkString("ab", "halo world"));

