export function secondsToMinutesAndSeconds(timeSeconds: number) {
  const minutes = Math.floor(timeSeconds / 60);
  const minutesFormat = Math.floor(timeSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutesFormat}:${seconds}`;
}

export function minutesToSeconds(timeMinutosSeconds:string) {
  const timeMinutes = Number(timeMinutosSeconds.split(":")[0]) * 60;

  const timeSeconds = Number(timeMinutosSeconds.split(":")[1]);

  return `${timeMinutes} + ${timeSeconds}`;
}
