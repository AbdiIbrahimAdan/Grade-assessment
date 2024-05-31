const {gradeMathPhysicsChemistry, gradeReligiousEducation, gradeEnglishSwahiliComputer,calculateGradesAndAverage, displayStudentInfo }=require ("../main");


//////////////////////////////////Testing math physics and chemistry grade//////////////////////////////
describe("math physics and chemistry grade", () =>{
  test("Grade(70 - 100) is 'A' Math Physics Chemistry", () =>{
    expect(gradeMathPhysicsChemistry(80)).toBe('A'); 
  });
  test("Grade(60 - 69) is 'B' Math Physics Chemistry", () =>{
    expect(gradeMathPhysicsChemistry(66)).toBe('B');
  });
  test("Grade(50 - 59) is 'C' Math Physics Chemistry", () =>{
    expect(gradeMathPhysicsChemistry(57)).toBe('C');
  });
  test("Grade(40 - 49) is 'Pass' Math Physics Chemistry", () =>{
    expect(gradeMathPhysicsChemistry(42)).toBe('Pass');
  });
  test("Grade(0 - 39) is 'Sup' Math Physics Chemistry", () =>{
    expect(gradeMathPhysicsChemistry(20)).toBe('Sup');
  });

  
  });
/////////////////////////////////////////////////religious education///////////////////////////////////
describe("Religious Education grade", () =>{
test("Grade(80 - 100)is 'A' for Religious Education ", () =>{
  expect(gradeReligiousEducation(91)).toBe('A');
});
test("Grade(70 - 79)is 'B' for Religious Education", () =>{
expect(gradeReligiousEducation(75)).toBe('B');
});
test("Grade(60 - 69)is 'C' for Religious Education", () =>{
  expect(gradeReligiousEducation(64)).toBe('C');
  });
  test("Grade(50 - 59)is 'Pass' for Religious Education", () =>{
    expect(gradeReligiousEducation(53)).toBe('Pass');
    });

    test("Grade(0 - 49)is 'Sup' for Religious Education", () =>{
      expect(gradeReligiousEducation(30)).toBe('Sup');
      });

});
////////////////////////Testing English ,Swahili and Computer grade///////////////////////////////
describe("English ,Swahili and Computer grade", () =>{
  test("Grade(0 - 44) is 'Sup' English ,Swahili and Computer", () =>{
    expect(gradeEnglishSwahiliComputer(35)).toBe('Sup');
  });
  test("Grade(65 - 74) is 'B' English ,Swahili and Computer", () =>{
    expect(gradeEnglishSwahiliComputer(71)).toBe('B');
  });
  test("Grade(75 - 100) is 'A' English ,Swahili and Computer", () =>{
    expect(gradeEnglishSwahiliComputer(79)).toBe('A');
  });
  test("Grade(45 - 54) is 'Pass' English ,Swahili and Computer", () =>{
    expect(gradeEnglishSwahiliComputer(49)).toBe('Pass');
  });
  test("Grade(55 - 64) is 'C'English ,Swahili and Computer", () =>{
    expect(gradeEnglishSwahiliComputer(60)).toBe('C');
  });

  
  });
    

