'use strict';

(async () => {
  const chalk = await import('chalk');
  console.log(chalk.default.hex('#ffd200')(`

╭ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ──────────────────────────────╮`) + chalk.default.hex('#f26135')(`

    Are you familiar with Auro's Definition of Done?

                Please be sure to review`) + chalk.default.hex('#ffd200')(`
      https://auro.alaskaair.com/definition-of-done`) + chalk.default.hex('#f26135')(`
            before submitting your pull request
             to ensure that you are compliant.`) + chalk.default.hex('#ffd200')(`

╰─────────────────────────────── ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╯
`)
  );
})();
