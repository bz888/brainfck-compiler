export function interpreter (input, memoryVal) {
  const intMemoryVal = parseInt(memoryVal)
  const tape = Array(intMemoryVal).fill(0)
  let ptr = 0
  let isLooping = false
  const loopStack = []
  let innerLoops = 0
  const printedVal = []
  const commentArr = []

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (isLooping) {
      if (char === '[') innerLoops++
      if (char === ']') {
        if (innerLoops === 0) isLooping = false
        else innerLoops--
      }
      continue
    }
    switch (char) {
      case '+':
        tape[ptr]++
        break
      case '-':
        tape[ptr]--
        break
      case ',':
        tape[ptr] = prompt()[0].charCodeAt()
        break
      case '.':
        // can use redux to print string
        // console.log(String.fromCharCode(tape[ptr]))

        printedVal.push(String.fromCharCode(tape[ptr]))
        break
      case '>':
        ptr++
        tape[ptr] = tape[ptr] || 0
        break
      case '<':
        ptr--
        tape[ptr] = tape[ptr] || 0
        break

      case '[':
        tape[ptr] === 0
          ? isLooping = true
          : loopStack.push(i)
        break
      case ']':
        tape[ptr] !== 0
          ? i = loopStack[loopStack.length - 1]
          : loopStack.pop()
        break
      default:
        commentArr.push(char)
        continue
    }
  }

  const returnObj = {
    printedVal,
    commentArr,
    tape
  }
  console.log(returnObj.commentArr)
  return returnObj
}
