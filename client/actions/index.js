export const INPUT_VAL = 'INPUT_VAL'
export const OUTPUT_VAL = 'OUTPUT_VAL'
export const ARR_VAL = 'ARR_VAL'
export const COMMENT_ARR_VAL = 'COMMENT_ARR_VAL'
export const CLICK_STATE_VAL = 'CLICK_STATE_VAL'
export const MEMORY_VAL = 'MEMORY_VAL'

export function outputVal (output) {
  return {
    type: OUTPUT_VAL,
    output
  }
}
export function inputVal (storedInput) {
  return {
    type: INPUT_VAL,
    storedInput
  }
}

export function arrVal (returnedArr) {
  return {
    type: ARR_VAL,
    returnedArr
  }
}

export function commentVal (commentArr) {
  return {
    type: COMMENT_ARR_VAL,
    commentArr
  }
}

export function clickStateVal (toggle) {
  return {
    type: CLICK_STATE_VAL,
    toggle
  }
}

export function memoryVal (memorySize) {
  return {
    type: MEMORY_VAL,
    memorySize
  }
}
