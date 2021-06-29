const generateMarkdown = (employees) => {
  let htmlFile = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>
<body class = "bg-dark vh-100">
  <nav class="navbar text-light bg-primary">
    <h1 class="navbar-brand mx-auto">My Team</h1>
  </nav>
  <div class="container-fluid h-75">
  <div class = "h-75 d-flex align-items-center justify-content-center">\n`;

  for (employee of employees) {
    htmlFile += employee.getCard();
  }
  htmlFile += `  </div></div>\n</body>\n</html>`;
  return htmlFile;
};

module.exports = { generateMarkdown}
