
//This function holds the generated readME data which help with the formatting of the file.
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Testing Information](#Testing_Information)
  * [Challenges/Learned Information](#Challenges/Learned_Information)
  * [Licenses](#Licenses)
  * [Screenshots](#Screenshots)
  * [Contact-Info](#Contact-Info)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Testing_Information
  ${data.test}

  ## Challenges/Learned_Information
  ${data.interesting}

  ## Licenses
  The license(s) used for this are the following: ${data.license}

  ## Screenshots
  ![input]()
  ![finalProduct]()

  ## Contact-Info
  Email: ${data.email}
  Github: ${data.github}

`;
}

//exports this to be used in index
module.exports = generateMarkdown;
