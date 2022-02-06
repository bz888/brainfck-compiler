export const INPUT_VAL = 'INPUT_VAL'
export const ARR_VAL = 'ARR_VAL'

export function inputVal (input) {
  return {
    type: INPUT_VAL,
    input
  }
}

export function arrVal (returnedArr) {
  return {
    type: ARR_VAL,
    returnedArr
  }
}
