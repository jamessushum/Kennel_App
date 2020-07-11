// Function capitalizes first letter in string
export function firstLetterCase(str) {
  return (
    str.charAt(0).toUpperCase() + str.slice(1)
  )
}
// Function joins items in array with 'and' in between
export function splitTypeArray(arr) {
  return arr.join(" and ")
}
