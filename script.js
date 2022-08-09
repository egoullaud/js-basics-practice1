var hoursSlept = Number(prompt("How many hours did you sleep? (ex. 8)"));

if (hoursSlept > 12) {
  console.log("Nice try, let's tell the truth this time...");
} else if (hoursSlept >= 8) {
  console.log("congratulations! that's a good night's sleep!");
} else if (hoursSlept > 5) {
  console.log("Let's shoot for a couple more hours tonight");
} else {
  console.log("Aren't you tired? Go take a nap!");
}
