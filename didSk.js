function didSk(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }

  return Math.max(...numbers);
}

module.exports = didSk;