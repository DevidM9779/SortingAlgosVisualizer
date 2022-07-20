function bubbleSort(array, animations) {
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true
        for (let i = 0; i<array.length-1-counter; i++) {
            // Add first animation of the comparison
            // Marks them with a different color
            animations.push([i, i+1])
            if (array[i] > array[i+1]) {
                let temp = array[i]
                array[i] = array[i+1]
                array[i+1] = temp
                isSorted = false
            }
            // Add second animation of the comparison
            // Changes the color back to normal
            animations.push([i, i+1])
        }
        // Add animation to show that the last index is
        // done being sorted
        animations.push([array.length-1-counter])
        counter++
    }
    return array
}

export default function getBubbleSortAnimations(array) {
    const animations = []
    if (array.length <= 1) return array
    bubbleSort(array, animations)
    return animations;
}

