import Link from 'next/link';
import Head from "next/head"; // Head это компонент для метатегов на странице (они будут в теге head)

export function MainLayout({children, title = 'Next JS'}) {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name={'keywords'} content={'js, next, react'}/>
			</Head>
			<nav>
				<Link href={'/'}><a>Home</a></Link>
				<Link href={'/about'}><a>About</a></Link>
				<Link href={'/posts'}><a>Posts</a></Link>
			</nav>
			<main>
				{children}
			</main>
		</>
	)
}
