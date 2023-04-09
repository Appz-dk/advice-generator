export type TAdvice = {
  id: string;
  text: string;
}

export const getRandomAdvice = async (): Promise<TAdvice> => {
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()
  return {
    id: data.slip.id,
    text: data.slip.advice
  }
}