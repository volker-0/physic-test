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
const Others = new QWidget();

//win
win.setWindowTitle('Тест по физике');
win.resize(800, 600);

//startText
startText.setObjectName('starttext');
startText.setText('Задания по физике. g = 10. \n Будет 10 заданий.');

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

//others
const othersLayout = new FlexLayout();
Others.setObjectName('others');
Others.setLayout(othersLayout);

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
//resultViewLayout.addWidget(buttonedit);
mainsLayout.addWidget(startText);
mainsLayout.addWidget(startbutton);
mainViewLayout.addWidget(mains);
othersLayout.addWidget(mainView);
othersLayout.addWidget(resultView);
rootViewLayout.addWidget(Others);
rootViewLayout.addWidget(testView);

//styling
const rootStyleSheet = `
  #rootView{
    padding: 30px;
  }
  #starttext{
    width: 370px;
    height: 50px;
  }
  #startbutton{
    width: 120px;
    height: 40px;
  }
  #others{
    flex-direction: row;
  }
  #testnumberlabel{
    width: 740px;
    height: 20px;
  }
  #testlabel{
    width: 740px;
    height: 140px;
  }
  #testOutputs{
    padding-top: 80px;
  }
  #testedit{
    width: 740px;
    height: 80px;
    margin-bottom: 10px;
  }
  #testbutton{
    width: 140px;
    height: 50px;
  }
  #resultLabel{
    width: 370px;
    height: 50px;
  }
  #buttonrestart{
    width: 120px;
    height: 40px;
  }
`;


//BACK-END

//register
let testnumber;
let right;
let answer;

const gravity = 6.67e-11;
const g = 10;
const c = 4200;

let tasks = [
  [40,4,60,2],
  [40,5,15],
  [20000,20000,6.67e-5],
  [4,10,20],
  [1,30],
  [15, 21],
  [0.5, 16800],
  [0.5, 0.15, 0.02],
  [10, 180, 90],
  [60, 0.04],
];

let taskAnswer = [
  () => ((tasks[0][0]*tasks[0][1])-(tasks[0][2]*tasks[0][3]))/(tasks[0][0]+tasks[0][2]),
  () => (tasks[1][2]-tasks[1][1])/tasks[1][0],
  () => Math.sqrt(gravity*((tasks[2][0]*tasks[2][1])/tasks[2][2])),
  () => (tasks[3][1]/tasks[3][2])/tasks[3][0],
  () => (tasks[4][1]*tasks[4][0])-((g* Math.pow(tasks[4][0],2)/2)),
  () => tasks[5][1]/tasks[5][0],
  () => tasks[6][0]/(c * tasks[6][1]),
  () => tasks[7][1]/(tasks[7][0]*tasks[7][2]),
  () => (tasks[8][0]*tasks[8][2])/tasks[8][1],
  () => (g *tasks[9][0])/tasks[9][1],
];


let listOfTasks=[`Тележка массой ${tasks[0][0]} кг движется со скоростью ${tasks[0][1]} м/с навстречу тележке массой ${tasks[0][2]} кг, движущейся со скоростью ${tasks[0][3]} м/с. После неупругого\nудара тележки движутся вместе. В каком направлении и с какой скоростью будут двигаться тележки ?`];
listOfTasks[1] = `Скорость движения автомобиля за ${tasks[1][0]} с возросла от ${tasks[1][1]} м/с до ${tasks[1][2]} м/с. Определите ускорение автомобиля.`;
listOfTasks[2] = `На каком расстоянии друг от друга находятся два шара массами ${tasks[2][0]} и ${tasks[2][1]} кг, если сила тяготения между ними ${tasks[2][2]} Н?`;
listOfTasks[3] = `Лодка качается на волнах, распространяющихся со скоростью ${tasks[3][0]} м/с, и за ${tasks[3][1]} с совершает ${tasks[3][2]} колебаний. Каково расстояние между соседними\nгребнями волн?`;
listOfTasks[4] = `На какой высоте будет мяч через ${tasks[4][0]} с, если его бросить вертикально вверх с начальной скоростью ${tasks[4][1]} м/с?`;
listOfTasks[5] = `Определить силу тока, проходящего через сопротивление ${tasks[5][0]} Ом, если напряжение на нем составляет ${tasks[5][1]} В.`;
listOfTasks[6] = `На сколько градусов нагреется вода массой ${tasks[6][0]} кг, если ей сообщить ${tasks[6][1]} Дж тепла?`;
listOfTasks[7] = `На прямой проводник с током длиной ${tasks[7][0]} м, перпендикулярный линиям индукции магнитного поля, действует сила ${tasks[7][1]} Н. Найти ток, если индукция поля ${tasks[7][2]} Тл.`;
listOfTasks[8] = `Определить напряжение на проводнике, имеющем сопротивление ${tasks[8][0]} Ом, если известно, что за ${tasks[8][1]} с по проводнику прошел заряд ${tasks[8][2]} Кл.`
listOfTasks[9] = `Человек стоит на полу. Масса его ${tasks[9][0]} кг. Площадь подошв ${tasks[9][1]} м2. Какое давление оказывает человек на пол?`;


//start
startbutton.addEventListener('clicked', () =>{
  mainView.hide();
  testView.show();
  resultView.hide();
  mainView.setEnabled(false);
  testView.setEnabled(true);
  resultView.setEnabled(false);
  testnumber = 1;
  right = 0;
  testNumberLabel.setText(`Задание ${testnumber} из ${listOfTasks.length}`);
  testLabel.setText(listOfTasks[testnumber-1]);
});

//answer on question
testButton.addEventListener('clicked', () =>{
  answer= testEdit.toPlainText();
  for (let i = 0; 1 == 1 ; i++) {
    let part1;
    let part2;
    if (answer[i] == ','){
      part1 = answer.slice(0, i);
      part2 = answer.slice(i+1);
      answer = part1 + '.' + part2;
      break;
    } else if(answer[i] == '.') break;
    if(i>100) break;
  };
  if(typeof(Number(answer)) == 'number' && answer!= '' && isNaN(answer) == false){
    console.log(Number(answer));
    if(Number(answer).toFixed(1)==taskAnswer[testnumber-1]().toFixed(1)){
      right++;
    };
    testnumber++;
    testNumberLabel.setText(`Задание ${testnumber} из ${listOfTasks.length}`);
    testLabel.setText(listOfTasks[testnumber-1]);
    testEdit.setText('')
    }else{
      testNumberLabel.setText(`Недопустимое значение`);
    };
  if (testnumber == listOfTasks.length + 1){
    mainView.hide();
    testView.hide();
    resultView.show();
    mainView.setEnabled(false);
    testView.setEnabled(false);
    resultView.setEnabled(true);

    resultLabel.setText(`Верно: ${right} из ${listOfTasks.length}`);
  };
});


//restart
buttonrestart.addEventListener('clicked', () =>{
  mainView.show();
  testView.hide();
  resultView.hide();
  mainView.setEnabled(true);
  testView.setEnabled(false);
  resultView.setEnabled(false);
});


//FINAL
rootView.setStyleSheet(rootStyleSheet)
win.setCentralWidget(rootView);
mainView.show();
testView.hide();
resultView.hide();
mainView.setEnabled(true);
testView.setEnabled(false);
resultView.setEnabled(false);
win.show();

global.win = win;
