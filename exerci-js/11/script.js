const input = prompt('Digite um número inteiro:','5');
let result = '';
let n = 5;
for(let i=1; i<=n; i++) {
    for(let j=1; j<=n; j++) {
        if (j==i) {
        result += '*'
        }
}
console.log(result);
}