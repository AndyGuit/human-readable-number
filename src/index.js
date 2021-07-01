module.exports = function toReadable(number) {
  const one = [
    'zero', 'one', 'two', 'three', 'four', 'five',
    'six', 'seven', 'eight', 'nine',
  ];
  const two = ['ten', 'eleven', 'twen', 'thir', 'for',
    'fif', 'six', 'seven', 'eigh', 'nine'];

  const spliting = number.toString().split('');

  if (spliting.length === 1) {
    if (number <= 9) {
      return one[number];
    }
  }

  if (spliting.length === 2) {
    if (number > 9 && number <= 11) {
      return `${two[number - one.length]}`;
    } else if (number === 12) {
      return 'twelve';
    } else if (number === 14) {
      return 'fourteen';
    } else if (number > 12 && number <= 19) {
      return `${two[number - one.length]}teen`;
    } else if (number >= 20 && number <= 99) {
      if (+spliting[1] === 0) {
        return `${two[+spliting[0]]}ty`;
      } else {
        return `${two[+spliting[0]]}ty ${one[+spliting[1]]}`;
      }
      
    }
  }

  if (spliting.length === 3) {
    if (+spliting[2] === 0 && +spliting[1] === 0) {
      return `${one[+spliting[0]]} hundred`;
    }
    if (+spliting[1] === 0) {
      return `${one[+spliting[0]]} hundred ${one[+spliting[2]]}`;
    }

    const exept = spliting[1] + spliting[2];

    if (+exept === 10) {
      return `${one[+spliting[0]]} hundred ${two[+spliting[2]]}`;
    }

    if (+exept === 11) {
      return `${one[+spliting[0]]} hundred ${two[+spliting[2]]}`;
    }

    if (+exept === 12) {
      return `${one[+spliting[0]]} hundred twelve`;
    }

    if (+exept === 14) {
      return `${one[+spliting[0]]} hundred fourteen`;
    }

    if (+exept >= 13 && +exept <= 19) {
      return `${one[+spliting[0]]} hundred ${two[+spliting[2]]}teen`;
    }

    if (+spliting[1] > 0 && +spliting[2] === 0) {
      return `${one[+spliting[0]]} hundred ${two[+spliting[1]]}ty`;
    }

    return `${one[+spliting[0]]} hundred ${two[+spliting[1]]}ty ${one[+spliting[2]]}`;
  }
};
