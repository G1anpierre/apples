export const YesOrNoCalulation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const equalChances = () =>
        Math.random() < 0.5 ? reject(false) : resolve(true)
      equalChances()
    }, 2000)
  })
}
