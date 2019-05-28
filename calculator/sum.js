var args = process.argv.slice(2);
var sum = 0;

for(var i = 0; i <= args.length - 1; i++){
  if(Number(args[i])%1 === 0)
    sum += Number(args[i]);
}

console.log(sum);
