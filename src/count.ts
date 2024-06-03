let count = 1

export const increase = (step: number) => {
  count += step || 1
}

export const decrease = (step: number) => {
  count -= step || 1
}

export const getCount = () => {
  return count
}
