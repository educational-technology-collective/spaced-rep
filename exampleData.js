const flashCard = function (
  index,
  type,
  seenTimes,
  timeStamp,
  timeInterval,
  content
) {
  return { index, type, seenTimes, timeStamp, timeInterval, content };
};

export const cardCollection = [
  flashCard(1, "qa", 1, "2:03", 2, {
    question: "How to define a function in python",
    answer: "def func()",
  }),

  // flashCard(2, "qaimg", 1, "3:03", 3, {
  //   imgURL:
  //   'https://www.freecodecamp.org/news/content/images/2020/11/serverCode_foR_1.png',
  //   question: "This image is an example of",
  //   answer: "Recursion in python",
  // }),

  flashCard(3, "mcq", 3, "20: 14", 6, {
    question: "How to print a variable x in Python?",
    answer: [
      { option: "System.out.println(x)", isCorrect: false },
      { option: "printf(x)", isCorrect: false },
      { option: "cout << x", isCorrect: false },
      { option: "print(x)", isCorrect: true },
    ],
  }),

  flashCard(4, "qa", 2, "12:10", 4, {
    question: "Write code to increment variable x by 2",
    answer: "x += 2",
  }),

  flashCard(5, "mcq", 2, "8: 12", 3, {
    question: "Negate the boolean variable isRight",
    answer: [
      { option: "isRight == !isRight", isCorrect: false },
      { option: "isRight = false", isCorrect: false },
      { option: "isRight = !isRight", isCorrect: true },
      { option: "isRight = true", isCorrect: false },
    ],
  }),

  // flashCard(6, "qaimg", 4, "10:10", 5, {
  //   imgURL:
  //     "https://www.simplilearn.com/ice9/free_resources_article_thumb/basic-example.JPG",
  //   question: "This is an example of using what loop",
  //   answer: "For Loop",
  // }),

  flashCard(7, "qa", 2, "31:10", 8, {
    question: "What type fof statements are If/Else called?",
    answer: "Conditional Statements",
  }),

  // flashCard(8, "qaimg", 2, "21:10", 8, {
  //   imgURL:
  //     "https://i0.wp.com/pythonguides.com/wp-content/uploads/2021/10/Python-Numpy-3d-array.png",
  //   question: "What is the dimension of the array in the figure",
  //   answer: "3",
  // }),

  flashCard(9, "mcq", 1, "11:11", 4, {
    question: "Extract 'word' from x = 'whatawordcool'",
    answer: [
      { option: "x[1, 12]", isCorrect: false },
      {
        option: "x[5, 9]",
        isCorrect: true,
      },
      { option: "x[5, 8]", isCorrect: false },
      { option: "x[5]", isCorrect: false },
    ],
  }),
];
