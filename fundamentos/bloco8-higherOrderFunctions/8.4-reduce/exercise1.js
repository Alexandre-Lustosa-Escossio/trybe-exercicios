const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(arrays) {
    return arrays.reduce((acc,curr) => {
        console.log(acc);
        console.log(curr);
        return acc.concat(curr)
    })
}


flatten(arrays);
