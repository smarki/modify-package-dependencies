# Modify package dependencies action

Allows to modify dependencies and dev dependencies in a package.json file.

# Hello world javascript action

This action allows appending or modifying dependencies in the package.json of the current checkout.

## Inputs

## `extra-dependencies`

**Required** The json string defining dependencies or `{"dependencies": {"some-dependency": "1.0.0", "devDependencies": {"some-dev-dependency": "1.0.0"}}`.

## Example usage

uses: smarki/modify-package-dependencies@0.5.0
with:
extra-dependencies: '{"dependencies": {"some-dependency": "1.0.0", "devDependencies": {"some-dev-dependency": "1.0.0"}}'
