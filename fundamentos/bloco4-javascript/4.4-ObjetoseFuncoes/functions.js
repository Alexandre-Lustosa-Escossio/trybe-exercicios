function soma(n1, n2) {
  return n1 + n2;
}

function subtrai(n1, n2) {
  return n1 - n2;
}

function multiplica(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

function modulo(n1, n2) {
  return n1 % n2;
}

function maiorNum(n1, n2) {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

function maiorTresNum(n1, n2, n3) {
  if (n1 > n2) {
    if (n1 > n3) {
      return n1;
    } else {
      return n3;
    }
  } else if (n2 > n3) {
    return n2;
  } else {
    return n3;
  }
}

function isPositive(n) {
  if (n > 0) {
    return "Positive";
  } else if (n < 0) {
    return "Negative";
  } else {
    return "zero";
  }
}

function isTriangle(ang1, ang2, ang3) {
  if (ang1 > 0 && ang2 > 0 && ang3 > 0) {
    if (ang1 + ang2 + ang3 == 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
