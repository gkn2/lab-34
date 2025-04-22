numbers: List[number] = [8, 6, 7, 5, 3, 0, 9]


states: List[str] = ["Michigan", "California", "Missouri", "Washington", "Illinois", "Georgia"]



print("#s:")
print(numbers)

print("States:")
print(states)




def number_search(array: List[number], search_term: number):

    for x in range(len(array)):
        if array[x] == search_term:
            return x
    return -1



def array_search(array: List[any], search_term: any):
    for x in range(len(array)):
        if array[x] == search_term:
            return x
    return -1





states.sort()
print("Sorted states:")
print(states)



numbers: List[number] = [8, 6, 7, 5, 3, 0, 9, 42]
numbers.sort()
print("Sorted numbers?")
print(numbers)



def compare_numbers(value1: number, value2: number):
    return value1 - value2



numbers.sort(compare_numbers)
print("Properly sorted numbers:")
print(numbers)