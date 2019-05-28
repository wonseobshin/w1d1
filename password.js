var args = process.argv.slice(2);
console.log('args: ', args.join());
str_arg = args.join();
str = '';

for(var i = 0; i <= str_arg.length - 1; i++){
  switch(str_arg[i]) {
    case 'a':
      str += '4';
      break;
    case 'e':
      str += '3';
      break;
    case 'o':
      str += '0';
      break;
    case 'l':
      str += '1';
      break;
    default:
      str += str_arg[i];
      break
 }
}
console.log(str);