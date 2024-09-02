function calculateEvenSum(start, end) {
  let total = " ";
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      total += i + " ";
    }
  }
  return (
    total +
    ` -----Это все парные числа из внесенного вами числа-----(${start} - ${end})`
  );
}
console.log(calculateEvenSum(6, 50000));
