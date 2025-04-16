{

  let size = parseInt(prompt("enter array size"));
  let arr = [];
  let sum = 0;

  for (let i = 1; i <= size; i++) {
    arr.push(parseInt(prompt("enter array element")));
  }

  console.log(arr);

  let total = arr.map((item) => (sum += item));
  console.log(`sum : ${total[total.length - 1]}`);

  let min = Math.min(...arr);
  let max = Math.max(...arr);
  
  console.log(`max number is ${max}`);
  console.log(`min number is ${min}`);
  
  let keyword = parseInt(prompt(`enter what do you want:`))
  let serch = arr.includes(keyword)

  if (serch === true)
  {
    console.log(`found ${keyword} in array`);
    }
    else
    {
      console.log(`not found ${keyword} in array`);
      }
  
}
