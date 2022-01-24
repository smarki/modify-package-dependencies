const core = require("@actions/core");
const path = require("path");
const fs = require("fs");

const extraDependencies = JSON.parse(core.getInput("extra-dependencies"));

if (!extraDependencies?.dependencies && !extraDependencies?.devDependencies) {
  console.log("Skipping; no extra dependencies to add.");
  return;
}

console.log("Adding following dependencies:");
console.log(extraDependencies);

const directory = process.cwd();
const pkPath = path.join(directory, "package.json");
const pk = JSON.parse(fs.readFileSync(pkPath, { encoding: "utf8" }));
const newPk = {
  ...pk,
  dependencies: { ...pk.dependencies, ...extraDependencies.dependencies },
  devDependencies: {
    ...pk.devDependencies,
    ...extraDependencies.devDependencies,
  },
};

console.log("New package.json dependencies:");
console.log(newPk.dependencies, newPk.devDependencies);

fs.writeFileSync(pkPath, JSON.stringify(newPk));
