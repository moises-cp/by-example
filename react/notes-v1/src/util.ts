export const getRandomNumber = () =>
  +Math.random().toString().split('.').slice(1).join();
