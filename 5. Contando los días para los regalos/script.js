const counter = document.querySelector('.counter');

function daysToXmas() {
  //we get the current seconds so we can make the calculation, also we get the current year
  const date = new Date();
  const currentYear = date.getFullYear();
  const nextChristmas = new Date(`Dec 25, ${currentYear}`);

  const milisecondsLeft = nextChristmas.getTime() - date.getTime();

  //86.400.000 is the ammount of MS in a day
  // We take the ceil value so it won't take time into consideratiion
  const daysLeft = Math.ceil(milisecondsLeft / 86400000);

  counter.textContent = `${daysLeft}`;
}

daysToXmas();
