let studentList = [
    {lastName:'Luba', firstName:'Hnativ', rating:80},
    {lastName:'Vasul', firstName:'Fatyk', rating:82},
    {lastName:'Vitalik', firstName:'Kreminskiy', rating:100},
    {lastName:'Tania', firstName:'Ramanuk', rating:87},
    {lastName:'Julia', firstName:'Bouchuc', rating:84},
    {lastName:'Ihor', firstName:'Mandzuk', rating:88}
];

//Outputs the list of students and their ratings
const showStudentsList = () => {
  studentList.forEach(function(a){
      console.log(a.lastName + " " + a.firstName + " " + a.rating);
  })
}

//Sorts array by student's lastname
const sortByLastname = () => {
  studentList.sort(function(a, b){
      return a.lastName > b.lastName ? 1 : -1;
  });
  showStudentsList();
}

//Sorts array by student's rating
const sortByRate = () => {
  studentList.sort(function(a, b){
      return a.rating < b.rating ? 1 : -1;
  })
  showStudentsList();
}

const showMaxMinMiddle = () => {
  var max = studentList[0], min = studentList[0], avg = studentList[0];

  //finding a student with min and max rating
  for (var i = 0; i < studentList.length; i++){
      if (studentList[i].rating > max.rating) max = studentList[i];
      if (studentList[i].rating < min.rating) min = studentList[i];
  }

  //figuring out average rating
  var average = studentList.reduce(function(acc, current){
      return acc + current.rating;
  }, 0) / studentList.length;

  //finding a student who has rating closest to average
  for (var i = 0; i < studentList.length; i++){
      if (Math.abs(studentList[i].rating - average) < Math.abs(avg.rating - average)){
          avg = studentList[i];
      }
  }

  console.log("Student with minimal rating is: ");
  console.log(min);
  console.log("Student with maximal rating is: ");
  console.log(max);
  console.log("Average rating is: " + average);
  console.log("Student with average rating is: ");
  console.log(avg);
}

const leaderDistance = () => {
  //finding a leader student
  let leader = studentList[0];
  studentList.forEach(function(i){
      if (i.rating > leader.rating) leader = i;
  })

  console.log(leader);
  console.log('--------------------------');

  //calculating rate value and applying to all objects
  var leaderDist = studentList.map(function(i){
      i.rate = parseFloat((100 - (i.rating / leader.rating) * 100).toFixed(2));
      console.log(i);
  })

}

// leaderDistance();
// showMaxMinMiddle();
// sortByLastname();
// sortByLastname();
// sortByRate();