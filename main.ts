let numbers = [8, 6, 7, 5, 3, 0, 9]
let states = ["Michigan", "California", "Missouri", "Washington", "Illinois", "Georgia"]
console.log("Numbers:")
console.log(numbers)
console.log("States:")
console.log(states)
function number_search(array: number[], search_term: number): number {
    for (let x = 0; x < array.length; x++) {
        if (array[x] == search_term) {
            return x
        }
        
    }
    return -1
}

function array_search(array: any[], search_term: any): number {
    for (let x = 0; x < array.length; x++) {
        if (array[x] == search_term) {
            return x
        }
        
    }
    return -1
}

states.sort()
console.log("Sorted states:")
console.log(states)
numbers = [8, 6, 7, 5, 3, 0, 9, 42]
numbers.sort()
console.log("Sorted numbers?")
console.log(numbers)
numbers.sort(function compare_numbers(value1: number, value2: number): number {
    return value1 - value2
})
console.log("Properly sorted numbers:")
console.log(numbers)
