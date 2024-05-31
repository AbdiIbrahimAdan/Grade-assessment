function gradeMathPhysicsChemistry(score) {
    if (score >= 70 && score <= 100) {
      return 'A';
    } else if (score >= 60 && score <= 69) {
      return 'B';
    } else if (score >= 50 && score <= 59) {
      return 'C';
    } else if (score >= 40 && score <= 49) {
      return 'Pass';
    } else {
      return 'Sup';
    }
  }
  console.log("*****************************Math physics Chemistry******************");

  console.log(gradeMathPhysicsChemistry(73));
  console.log(gradeMathPhysicsChemistry(65));
  console.log(gradeMathPhysicsChemistry(60));
  console.log(gradeMathPhysicsChemistry(51));
  console.log(gradeMathPhysicsChemistry(40));
  console.log(gradeMathPhysicsChemistry(30));
  function gradeReligiousEducation(score) {
    if (score >= 80 && score <= 100) {
      return 'A';
    } else if (score >= 70 && score <= 79) {
      return 'B';
    } else if (score >= 60 && score <= 69) {
      return 'C';
    } else if (score >= 50 && score <= 59) {
      return 'Pass';
    } else {
      return 'Sup';
    }
  }
  console.log("===========================Religious Education======================");
  
  console.log(gradeReligiousEducation(73));
  console.log(gradeReligiousEducation(65));
  console.log(gradeReligiousEducation(60));
  console.log(gradeReligiousEducation(51));
  console.log(gradeReligiousEducation(40));
  console.log(gradeReligiousEducation(30));
  function gradeEnglishSwahiliComputer(score) {
    if (score >= 75 && score <= 100) {
      return 'A';
    } else if (score >= 65 && score <= 74) {
      return 'B';
    } else if (score >= 55 && score <= 64) {
      return 'C';
    } else if (score >= 45 && score <= 54) {
      return 'Pass';
    } else {
      return 'Sup';
    }
  }
  
  console.log("+++++++++++++++++++++++++Math physics Chemistry++++++++++++++++++++++++");


  console.log(gradeEnglishSwahiliComputer(94));
  console.log(gradeEnglishSwahiliComputer(65));
  console.log(gradeEnglishSwahiliComputer(60));
  console.log(gradeEnglishSwahiliComputer(51));
  console.log(gradeEnglishSwahiliComputer(40));
  console.log(gradeEnglishSwahiliComputer(30));



function calculateGradesAndAverage(student) {
    const result = { name: student.name };
    let totalPoints = 0;

    result.math = gradeMathPhysicsChemistry(student.math);
    result.phy = gradeMathPhysicsChemistry(student.phy);
    result.che = gradeMathPhysicsChemistry(student.che);
    result.re = gradeReligiousEducation(student.re);
    result.eng = gradeEnglishSwahiliComputer(student.eng);
    result.kis = gradeEnglishSwahiliComputer(student.kis);
    result.comp = gradeEnglishSwahiliComputer(student.comp);
  
    totalPoints = student.math + student.phy + student.che + student.re + student.eng + student.kis + student.comp;
    result.avgPts = Math.floor(totalPoints / 7);
  
    return result;
  }


  function displayStudentInfo(student) {
    const grades = calculateGradesAndAverage(student);
    console.log('Student Information:');
    console.log(`Name: ${grades.name}`);
    console.log(`Math: ${grades.math}`);
    console.log(`English: ${grades.eng}`);
    console.log(`Kiswahili: ${grades.kis}`);
    console.log(`Physics: ${grades.phy}`);
    console.log(`Chemistry: ${grades.che}`);
    console.log(`Religious Education: ${grades.re}`);
    console.log(`Computer Studies: ${grades.comp}`);
    console.log(`Average Points: ${grades.avgPts}`);
  }
  
  
  const studentScore = [{ name: "Julius Gakiri", math: 80, eng: 65, kis: 78, phy: 67, che: 56, re: 89, comp: 82 }, { name: "Abdi Ibrahim", math: 70, eng: 65, kis: 57, phy: 78, che: 68, re: 54, comp: 60 }];
  displayStudentInfo(studentScore[0]);
  displayStudentInfo(studentScore[1]);
  
  
 module.exports = {gradeMathPhysicsChemistry, gradeReligiousEducation, gradeEnglishSwahiliComputer,calculateGradesAndAverage, displayStudentInfo  };
  









