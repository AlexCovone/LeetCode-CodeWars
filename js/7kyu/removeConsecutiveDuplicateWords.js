// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries.

const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((word, index, arr) => word !== arr[index + 1]).join(' ')
}