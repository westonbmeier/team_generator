function content(partial) {
    return `
    <!doctype html>
      <html lang="en">
       <head>
      <title>Title</title>
      <!-- Required meta tags -->
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    </head>
    <body>
  <header class="py-5" id="header" style="background-color: #78edff">
      <div class="container">
          <h1 class="text-center text-white">My Team</h1>
      </div>
  </header>
   <section class="mt-5">
      <div class="container">
       <div class="row">
                ${partial}
      </div>
    </div>
  </section>
        
      <!-- Optional JavaScript -->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
  </html>`;
  }
  
  // Function to generate employee information //
  function generatedContent(obj) {

    let employeeInfo;
  
    if (obj.getRole() === "Manager") {

      employeeInfo = `Office Number: ${obj.getOfficeNumber()}`;

    }
    
    else if (obj.getRole() === "Engineer") {

      employeeInfo = `Github Username: ${obj.getGithub()}`;

    }
    
    else if (obj.getRole() === "Intern") {

      employeeInfo = `School: ${obj.getSchool()}`;
    }
    
    else {
      console.log("Choose a valid role");
    }

    return `
          <div class="col-sm">
            <div class="card shadow-lg  mb-5  rounded" style="width: 18rem;">
              <div class="p-4" style="background-color: #3a05fd">
                <h4 class="card-title text-white text-center">${obj.getName()}</h5>
                  <h5 class="card-subtitle mb-2 text-center text-white">${obj.getRole()}</h6>
              </div>
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item">ID: ${obj.getId()}</li>
                  <li class="list-group-item">Email: <a href="#">${obj.getEmail()}</a></li>
                  <li class="list-group-item">${employeeInfo}</li>
                </ul>
              </div>
            </div>
          </div>\n`;
  }
  
  module.exports = {
    content: content,
    generatedContent: generatedContent
  };