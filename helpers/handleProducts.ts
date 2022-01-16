import {v4 as uuidv4} from 'uuid'

export const handleNumberOfProducts = (data, value) => {
  const totalAdded = []
  for (let i = 0; i < value; i++) {
    let uniqueIdProduct = uuidv4()

    totalAdded.push({...data, uniqueIdProduct})
  }
  return totalAdded
}

export const calcTotalAmount = products => {
  const totalAmount = products.reduce((total, product) => {
    total += Number(product.price)
    return total
  }, 0)

  return totalAmount
}
