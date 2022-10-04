module.exports = {
  '*': 'prettier --ignore-unknown --write',
  '*.ts?(x)': () => [
    'yarn typecheck',
    'yarn lint',
    'yarn test --bail --findRelatedTests',
  ],
}
