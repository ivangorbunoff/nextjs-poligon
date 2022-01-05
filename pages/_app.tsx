import '../styles/style.scss';

/**
 * Это общий файл Next с зарезервированым именем. Позволяет писать общую логику приложения,
 * а так-же подключать общие стили и т.д. Подробнее в документации.
 */

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
