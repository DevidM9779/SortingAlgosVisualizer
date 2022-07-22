/*
// Insertion sort algo
function insertionSort(array) {
    for (let i = 1; i<array.length; i++) {
        let j = i
        while (j>0 && array[j] < array[j-1]) {
            let temp = array[j]
            array[j] = array[j-1]
            array[j-1] = temp
            j--
        }
    }
    return array
}
*/

function insertionSort(array, animations) {
    for (let i = 1; i<array.length; i++) {
        let j = i
        while (j>0) {
            // First animation to mark down the two bars
            // that will be compared
            animations.push([j, j-1])
            if (array[j] < array[j-1]) {
                // Animation to swap the bars
                animations.push([j, j - 1, array[j], array[j - 1]])
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
                // Animation to turn the bars back to the
                // original color
                animations.push([j, j - 1])
                j--
            } else {
                // Animation to turn the bars back to the
                // original color
                animations.push([j, j-1])
                break;
            }
        }
    }
    for (let i = 0; i<array.length; i++) animations.push([i])
}

export default function getInsertionSortAnimations(array) {
    const animations = []
    if (array.length <= 1) return array
    insertionSort(array, animations)
    return animations;
}
