function createXmasTree(height) {
  //Make the function return if height is higher than 100
  if (height > 100) {
    return 'The maximum height is 100';
  }
  //we create an array to store each line of the final string
  let tree = [];

  for (let i = 0; i < height; i++) {
    const space = '_'.repeat(height - 1 - i);
    //initialize the first line with one * and add 2 every new line to keep the symmetry
    const line = space + '*' + '*'.repeat(i * 2) + space;
    tree.push(line);
  }

  //we need to create the base for the tree
  const baseSpace = '_'.repeat(height - 1);
  const base = baseSpace + '#' + baseSpace;
  tree.push(base, base);

  console.log(tree.join('\n'));
  return tree.join('\n');
}
