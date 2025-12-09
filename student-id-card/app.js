function GenerateCard() {
  const user = {
    name: prompt("Enter your name"),
    age: prompt("Enter your age"),
    ID: prompt("Enter your ID"),
    Course: prompt("Enter your Course"),
    Batch: prompt("Enter your Batch")
  };

  document.getElementById("student_id").style.display = "block";
  document.getElementById("startBtn").style.display = "none";
  document.querySelector("label[for='upload']").style.display = "none";

  document.getElementById("name").innerHTML = user.name;
  document.getElementById("age").innerHTML = `<span class="bold">Age:</span> <span class="value">${user.age}</span>`;
  document.getElementById("ID").innerHTML = `<span class="bold">ID:</span> <span class="value">${user.ID}</span>`;
  document.getElementById("Course").innerHTML = `<span class="bold">Course:</span> <span class="value">${user.Course}</span>`;
  document.getElementById("Batch").innerHTML = `<span class="bold">Batch:</span> <span class="value">${user.Batch}</span>`;
}

function uploadImage(event) {
  var file = event.target.files[0];
  var img = document.getElementById("profilePhoto");
  img.src = URL.createObjectURL(file);
}
