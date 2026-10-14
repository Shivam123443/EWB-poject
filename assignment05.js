
function rectangleArea(length = 5, width = 4) {
    return length * width;
}

const rectangleAreaArrow = (length = 5, width = 4) => {
    return length * width;
};

console.log(
    `Standard Function Area (Default 5 x 4): ${rectangleArea()}`
);

console.log(
    `Arrow Function Area (Custom 10 x 3): ${rectangleAreaArrow(10, 3)}`
);

{
    let blockVar = 100;
    console.log("Inside block:", blockVar);
}

try {
    console.log(blockVar);
} catch (error) {
    console.log(`ScopeTestError: ${error.name}: blockVar is not defined`);
}
