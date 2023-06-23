const newsButton = document.getElementById('generateButton');
const newsContent = document.getElementById('newsContent');

const news = [
  "Новость 1: Свободная экономическая зона устанавливается на территориях ДНР, ЛНР, Херсонской и Запорожской областей.",
  "Новость 2: Объем инвестиций для работы в экономической зоне составит 30 млн рублей, для малого бизнеса – 3 млн, для IT-компаний – 1 млн. Поддержкой и сопровождением инвестиционных проектов будет заниматься Фонд развития территорий.",
  "Новость 3: Это вымышленная новость номер 3.",
  "Новость 4: Это вымышленная новость номер 4.",
  "Новость 5: Это вымышленная новость номер 5.",
  "Новость 6: Это вымышленная новость номер 6."
];

function generateRandomNews() {
  const randomIndex = Math.floor(Math.random() * news.length);
  const randomNews = news[randomIndex];
  newsContent.textContent = randomNews;
}

newsButton.addEventListener('click', generateRandomNews);
