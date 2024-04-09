import { INPUT } from "./day_4_input.js";

function getAnswer() {
  let input2 = INPUT;

  input2.forEach((i, idx) => {
    i.count ? (i.count += 1) : (i.count = 1);

    const matchCount = i.mine.filter((num) => i.winners.includes(num)).length;
    let marker = 1;

    while (matchCount >= marker && idx + marker < input2.length) {
      input2[idx + marker].count
        ? (input2[idx + marker].count += i.count)
        : (input2[idx + marker].count = i.count);

      marker += 1;
    }
  });

  return input2.reduce((a, b) => a + b.count, 0);
}

console.log(getAnswer()); // 5704953
