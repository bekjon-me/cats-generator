const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
    '#80B300',
    '#809900',
]

export default function colorRandom() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
