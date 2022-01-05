import Document, { Html, Head, Main, NextScript } from 'next/document'

/**
 * Компоненты , используемые здесь , являются общими для ВСЕХ страниц. Layout (в нашем случае MainLayout) же в отличие
 * от этого файла (имя зарезервировано Next) может быть разный. Например админка сайта и публичная часть.
 * Хоть этот файл является общим для Next, здесь не добавить общую логику приложения или общие стили CSS (например styled-jsx).
 * Если нужны общие компоненты на всех страницах (например, меню или панель инструментов), или подключить общие стили
 * нужно использовать _App компонент вместо этого.
 */

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ru">
				<Head>
					<meta name={'description'} content={'NextJS first project'}/>
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
