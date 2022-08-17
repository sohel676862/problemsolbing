const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
const colorCode = color => `${COLORS.indexOf(color[0])}${COLORS.indexOf(color[1])}`

console.log(colorCode(['orange', 'orange']))