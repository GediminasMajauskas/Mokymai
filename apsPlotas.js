function apsPlotas(r) {
  if (typeof r !== 'number' || r < 0) {
    throw new Error('Radius must be a non-negative number');
  }
  return Math.PI * r * r;
}

module.exports = apsPlotas;