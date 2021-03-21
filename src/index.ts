import Quizzer from './Quizzer';

const bot: Quizzer = new Quizzer();
bot.login(process.env.BOT_TOKEN);