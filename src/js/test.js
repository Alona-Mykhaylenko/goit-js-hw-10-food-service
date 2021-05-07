import menu from '../menu.json';

// // Named import-export- just writing export
// before those entities that we want to export
// export const text = 'text';

// export function printText(string) {
//   console.log(string);
// }

// printText(menu);

// Default import-export
// export default printText;

// Another option of doing the named export

const text = 'text';

function printText(string) {
  console.log(string);
}

export { text, printText };
