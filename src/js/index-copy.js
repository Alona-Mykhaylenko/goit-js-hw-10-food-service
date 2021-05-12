import './styles.css';
console.log('run');
import './js/test';

// =============1. Default import-export
// import print from './js/test';
// console.log(print);

// print('hello');

// =============2. Named import-export

// import { text, printText } from './js/test';
// console.log(text);
// printText('uhdjncjkhkjnavkn');

// ============ 3. Another option of named import

import * as object from './js/test';
console.log(object.text);

object.printText('uhdjncjkhkjnavkn');
