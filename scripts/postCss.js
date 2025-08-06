import autoprefixer from 'autoprefixer';
import postcss from 'postcss';
import discardComments from 'postcss-discard-comments';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const directoryPath = path.join(__dirname, '../src');

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
      return console.log('Unable to scan directory: ' + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
      if (file.includes(".css")) {
        processor(file);
      }
  });
});

function processor(file) {
  fs.readFile(`src/${file}`, (err, css) => {
    // Custom plugin to remove :root rules
    const removeRootRules = () => {
      return {
        postcssPlugin: 'remove-root-rules',
        Rule(rule) {
          if (rule.selector === ':root') {
            rule.remove();
          }
        }
      }
    }
    removeRootRules.postcss = true;
    
    postcss()
      .use(autoprefixer)
      .use(discardComments({
        remove: function(comment) { return comment[0] == "@"; }
      }))
      .use(removeRootRules())
      .process(css, { from: `src/${file}`, to: `src/${file}` })
      .then(result => {
        fs.writeFile(`src/${file}`, result.css, () => true)
      })
    })
}
