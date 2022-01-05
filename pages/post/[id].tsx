import {useRouter} from "next/router";
import {MainLayout} from "../../components/MainLayout";
import {useState, useEffect} from "react";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces";

interface PostPageProps {
	post: MyPost
}

export default function Post({ post: serverPost }: PostPageProps) {
	const router = useRouter();

	const [post, setPost] = useState(serverPost);

	useEffect(() => {
		async function load() {
			const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`);
			const data = await response.json();
			setPost(data);
		}

		if (!serverPost) load();
	}, []);

	if (!post) {
		return (
			<MainLayout>
				<p>Loading...</p>
			</MainLayout>
		)
	}

	// в router.query.id (id это параметр в квадратных скобках в названии файла) значение после /post/ например если ввести /post/123
	// то в router.query.id будет 123
	return (
		<MainLayout>
			<h1>Post {router.query.id}</h1>
			<h2>{post.title}</h2>
			<p>{post.description}</p>
		</MainLayout>
	)
}

interface PostNextPageContext extends NextPageContext {
	query: {
		id: string
	}
}

/**
 * Этот метод getInitialProps выполнится один раз на сервере, затем будет выполнятся на клиенте перед переходом на страницу,
 * и если будет задержка от сервера, то пользователь ни как не поймет что переход уже происходит, но страница отрисуется, только когда
 * мы получим данные fetch(). Поэтому нужно сначала перейти на страницу, вызвав return, если мы на фронте
 * (будет отсутствовать объект ctx.req). При этом если сразу перейти на эту страницу, или перезагрузить ее, то контент
 * будет возвращен сразу, т.е. для SEO это хорошо.
 * */
Post.getInitialProps = async (ctx: PostNextPageContext) => {
	if (!ctx.req) {
		return {
			post: null
		}
	}

	const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
	const post: MyPost = await response.json();

	return {
		post
	}
}

/**
 * Этот метод getServerSideProps выполняется всегда только на сервере. Если нам нужен например только SSR, то нужно использовать его.
 * В нем можно делать запросы к БД, чего нельзя делать в методе выше getInitialProps, т.к. он отрабатывает и на клиенте.
 * В примере ниже я повторил логику получения данных из примера выше, но использовал другой метод getInitialProps.
 * Если нужно только SSR то используй getServerSideProps, если комбинированный рендеринг, то getInitialProps
 * */

// export async function getServerSideProps(ctx) {
// 	if (!ctx.req) {
// 		return {
// 			props: {
// 				post: null
// 			}
// 		}
// 	}
//
// 	const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
// 	const post = await response.json();
//
// 	return {
// 		props: {
// 			post
// 		}
// 	}
// }

