module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.ts?(x)': (filenames) => [
    'yarn typecheck',
    'yarn lint',
    `yarn test --bail --findRelatedTests ${filenames.join(' ')}`,
  ],
}
