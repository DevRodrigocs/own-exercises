function makeCoffeePromise(type) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        resolve(`Here is your ${type} coffee!`);
      } else {
        reject("Sorry, we brought you tea instead!");
      }
    }, 2000);
  });
}

export async function orderCoffee(type) {
  console.log(`\n1. Ordering a ${type} coffee...`);
  try {
    const result = await makeCoffeePromise(type);
    console.log(`Success: ${result}`);
  } catch (error) {
    console.log(`Failed: ${error}`);
  }
}