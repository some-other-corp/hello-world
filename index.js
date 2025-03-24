const core = require('@actions/core');
const github = require('@actions/github');

try {
  // Fetch the value of the input 'who-to-greet' specified in action.yml
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Executing in runner for repository: ${nameToGreet}!`);

} catch (error) {
  // Handle errors and indicate failure
  core.setFailed(error.message);
}