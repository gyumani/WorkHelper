const quotes = [
  {
    quote: "컴퓨터는 쓸모가 없다. 그것은 그냥 대답만 할 수 있다.",
    author: "Pablo Picasso",
  },
  {
    quote: "컴퓨터는 비키니와 같다. 사람들의 무성한 추측만 만들어낸다.",
    author: "Sam Ewing",
  },
  {
    quote: "사람들은 컴퓨터를 갖게 되자, 새로운 대량 살상무기를 만들어낸다.",
    author: "Janet Reno",
  },
  {
    quote:
      "컴퓨터랑 일하는 건 엄청 멋있다. 누구랑 싸우지도 않고, 모든 것을 대신 기억해주고, 내 맥주를 뻇어 마시지도 않는다.",
    author: "Paul Leary",
  },
  {
    quote:
      "자동차가 컴퓨터와 같은 개발공정을 따랐다면, 롤스로이스는 100달러쯤에 살 수 있고 연비도 백만마일 정도 될 거다. 하지만 일년에 한 번씩 폭발해버리는 살인머신이 되어버릴거다.",
    author: "Robert X. Cringely",
  },
  {
    quote: "중앙 컴퓨터가 말했나, R2D2? 낯선 컴퓨터는 믿지 않는게 좋아",
    author: "C3PO",
  },
  {
    quote: "창 밖으로 집어던질 수 없는 컴퓨터는 절대 믿지 마라.",
    author: "Steve Wozniak",
  },
  {
    quote: "하드웨어 : 사람이 발로 걷어찰 수 있는 컴퓨터의 부분",
    author: "Jeff Pesis",
  },
  {
    quote:
      "오늘날 대부분의 소프트웨어는 구조적 고민 없이 그냥 벽돌 한장씩 쌓아올린 피라미드 같다. 더구나 수천만의 노예와 폭력들로 쌓아 올려졌다.",
    author: "Alan Kay",
  },
  {
    quote:
      "나는 드디어 상위호환성 Upward Compatible이 의미하는 바를 깨달았다. 그것은 옛날에 만든 실수까지 그대로 유지해야 한다는 뜻이다. 제길.",
    author: "Dennie van Tassel",
  },
  {
    quote:
      "버클리에서 나온 두 개의 제품이 있다. 바로 LSD(환각제)와 UNIX 다. 우리는 이것이 우연의 일치라고 믿을 수 없다.",
    author: "Jeremy S. Anderson",
  },
  {
    quote: "2038년 1월 19일 오전 3시 14분 07초, – Unix 세상의 끝",
    author: "Unix",
  },
  {
    quote: "젠장. 이젠 밖에 있는 모든  운영 시스템이 똑같아졌다.",
    author: "브라이언 발렌타인",
  },
  {
    quote: "인터넷, 그게 아직도 있어?",
    author: "Homer Simpson",
  },
  {
    quote:
      "웹은 마치 그녀같아. 내가 어디로 돌아눕든 항상 눌러주길 원하는 버튼들이 있어.",
    author: "Nytwind",
  },
  {
    quote:
      "이미 수백 만 개의 타자기 앞에 수백 만 원숭이들이 앉아있지만 유즈넷에는 세익스피어가 없다.",
    author: "Blair Houghton",
  },
  {
    quote:
      "우리는 마이크로소프트다. 저항은 소용없다. 당신은 결국 우리와 동화될 것이다.",
    author: "Bumper sticker, 자동차 범퍼회사",
  },
  {
    quote:
      "어떤 바보라도 컴퓨터를 사용할 수 있다. 그래서 많은 사람들이 컴퓨터를 사용한다.",
    author: "Ted Nelson",
  },
  {
    quote: "고객을 ‘유저’라고 부르는 산업은 딱 두 개가 있다. – 마약, IT",
    author: "Edward Tufte",
  },
  {
    quote:
      "우리는 프로그래머 3대 미덕을 잘 알고 있다. – 게으름, 괴팍함, 그리고 자만심.",
    author: "Larry Wall",
  },
  {
    quote:
      "프로그래머의 문제점은 일이 너무 늦어질 때까지, 뭘하고 있는지 절대 물어볼 수 없다는 점이다.",
    author: "Seymour Cray",
  },
  {
    quote:
      "붓과 색을 공부한다고 훌륭한 화가가 되지 않듯, 컴퓨터과학을 공부한다고 훌륭한 프로그래머가 되지는 않는다.",
    author: "Eric Raymond",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomEq = Math.floor(Math.random() * quotes.length);

const quoteObj = quotes[randomEq];

quote.innerText = quoteObj.quote;
author.innerText = quoteObj.author;
