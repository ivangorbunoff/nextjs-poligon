/**
 * Этот файл для конфигурации Next
 * Для того чтобы работать с переменными окружения env можно скачать пакет dotenv и создать файл .env в корне проекта.
 * Там создать переменные окружения и они будут доступны в нашем приложении. И например если у нас поменяется урл к апи
 * для получения данных, нужно будет поменять значение переменной только в файле .env, а не бегать по всему приложению.
 * Так-же можно файл .env поместить в gitignore для безопасности.
 * */

module.exports = {
	env: {
		API_URL: process.env.API_URL,
	}
}