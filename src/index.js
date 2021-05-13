const { QMainWindow, QLabel, QTextEdit, QPushButton, QWidget, FlexLayout} = require('@nodegui/nodegui');


//FRONT-END

//objects
const win = new QMainWindow();
const startText = new QLabel();
const startbutton = new QPushButton();
const testNumberLabel = new QLabel();
const testLabel = new QLabel();
const testEdit = new QTextEdit();
const testButton = new QPushButton();
const resultLabel = new QLabel();
const buttonrestart = new QPushButton();
const buttonedit = new QPushButton();

//widgets
const rootView = new QWidget()
const mainView = new QWidget();
const testView = new QWidget();
const resultView = new QWidget();
const mains = new QWidget();
const testLaybels = new QWidget();
const testOutputs = new QWidget();

//win
win.setWindowTitle('Тест по физике');
win.resize(800, 600);

//startText
startText.setObjectName('starttext');
startText.setText('Задания по физике. Ответ округлять \nдо десятых. Будет 10 заданий.');

//startbuton
startbutton.setObjectName('startbutton');
startbutton.setText('Начать');

//testNumberLabel
testNumberLabel.setObjectName('testnumberlabel');
testNumberLabel.setText('');

//testLabel
testLabel.setObjectName('testlabel');
testLabel.setText('');

//testEdit
testEdit.setObjectName('testedit');
testEdit.setText('');

//testButton
testButton.setObjectName('testbutton');
testButton.setText('Далее');

//resultLabel
resultLabel.setObjectName('resultLabel');
resultLabel.setText('');

//buttonrestart
buttonrestart.setObjectName('buttonrestart');
buttonrestart.setText('Заново');

//buttonedit
buttonedit.setObjectName('buttonedit');
buttonedit.setText('Изменить значения');

//rootView
const rootViewLayout = new FlexLayout();
rootView.setObjectName('rootView');
rootView.setLayout(rootViewLayout);

//mainView
const mainViewLayout = new FlexLayout();
mainView.setObjectName('mainView');
mainView.setLayout(mainViewLayout);

//rootView
const testViewLayout = new FlexLayout();
testView.setObjectName('testView');
testView.setLayout(testViewLayout);

//resultView
const resultViewLayout = new FlexLayout();
resultView.setObjectName('resultView');
resultView.setLayout(resultViewLayout);

//mains
const mainsLayout = new FlexLayout();
mains.setObjectName('mains');
mains.setLayout(mainsLayout);

//testLaybels
const testLaybelsLayout = new FlexLayout();
testLaybels.setObjectName('testLaybels');
testLaybels.setLayout(testLaybelsLayout);

//testOutputs
const testOutputsLayout = new FlexLayout();
testOutputs.setObjectName('testOutputs');
testOutputs.setLayout(testOutputsLayout);

//add widget
testLaybelsLayout.addWidget(testNumberLabel);
testLaybelsLayout.addWidget(testLabel);
testOutputsLayout.addWidget(testEdit);
testOutputsLayout.addWidget(testButton);
testViewLayout.addWidget(testLaybels);
testViewLayout.addWidget(testOutputs);
resultViewLayout.addWidget(resultLabel);
resultViewLayout.addWidget(buttonrestart);
resultViewLayout.addWidget(buttonedit);
mainsLayout.addWidget(startText);
mainsLayout.addWidget(startbutton);
mainViewLayout.addWidget(mains);
rootViewLayout.addWidget(mainView);
rootViewLayout.addWidget(testView);
rootViewLayout.addWidget(resultView);

//styling
const mainStyleSheet = `
  #mainView {
    padding: 40px;
  }
  #starttext{
    width: 200px;
    height: 30px;
  }
  #startbutton{
    width: 200px;
    height: 100px;
  }
`;

const testStyleSheet =`
  #testView {
    padding: 30px;
  }
  #testnumberlabel{
    width: 200px;
    height: 15px;
  }
  #testlabel{
    width: 740px;
    height: 150px;
  }
  #testOutputs{
    padding-top: 80px;
  }
  #testedit{
    width: 740px;
    height: 152px;
    margin-bottom: 10px;
  }
  #testbutton{
    width: 180px;
    height: 70px;
  }
`;

const resultStyleSheet =`
  #resultView{
    padding: 30px;
  }
  #resultLabel{
    margin-bottom: 5px;
    width: 150px;
    height: 15px;
  }
  #buttonrestart{
    margin-bottom: 5px;
    width: 110px;
    height: 30px;
  }
  #buttonedit{
    width: 110px;
    height: 30px;
  }
`;


//BACK-END

//register
let testnumber;
let right;
let answer;
const gravity = 6.67e-11;
let tasks = [
  [40,4,60,2],
  [40,5,15],
  [20000,20000,6.67e-11],
  [4,10,20],
  [],
  [],
  [],
  [],
  [],
  [],
];
let taskAnswer = [
  () => ((tasks[0][0]*tasks[0][1])-(tasks[0][2]*tasks[0][3]))/(tasks[0][0]+tasks[0][2]),
  () => (tasks[1][2]-tasks[1][1])/tasks[1][0],
  () => Math.sqrt(gravity*((tasks[2][0]*tasks[2][1])/tasks[2][2])),
  () => (tasks[3][1]/tasks[3][2])/tasks[3][0],
]


let listOfTasks=[`Тележка массой ${tasks[0][0]} кг движется со скоростью ${tasks[0][1]} м/с навстречу тележке массой ${tasks[0][2]} кг, движущейся со скоростью ${tasks[0][3]} м/с. После неупругого\nудара тележки движутся вместе. В каком направлении и с какой скоростью будут двигаться тележки ?`];
listOfTasks[1] = `Скорость движения автомобиля за ${tasks[1][0]} с возросла от ${tasks[1][1]} м/с до ${tasks[1][2]} м/с. Определите ускорение автомобиля.`;
listOfTasks[2] = `На каком расстоянии друг от друга находятся два шара массами ${tasks[2][0]} и ${tasks[2][1]} кг, если сила тяготения между ними ${tasks[2][2]} Н?`;
listOfTasks[3] = `Лодка качается на волнах, распространяющихся со скоростью ${tasks[3][0]} м/с, и за ${tasks[3][1]} с совершает ${tasks[3][2]} колебаний. Каково расстояние между соседними\nгребнями волн?`




startbutton.addEventListener('clicked', () =>{
  win.setCentralWidget(testView);
  testnumber = 1;
  testNumberLabel.setText(`Задание ${testnumber} из 12`);
  testLabel.setText(listOfTasks[testnumber-1]);
});

testButton.addEventListener('clicked', () =>{
  answer= testEdit.toPlainText();
  if(Number(answer)==taskAnswer[testnumber-1]().toFixed(1)){
    right++;
  };
  testnumber++;
  testNumberLabel.setText(`Задание ${testnumber} из 12`);
  testLabel.setText(listOfTasks[testnumber-1]);
});



//FINAL
mainView.setStyleSheet(mainStyleSheet);
testView.setStyleSheet(testStyleSheet);
resultView.setStyleSheet(resultStyleSheet);

win.setCentralWidget(mainView);
win.show();

global.win = win;
