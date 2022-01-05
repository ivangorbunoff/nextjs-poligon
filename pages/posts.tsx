import {MainLayout} from "../components/MainLayout";
import Link from 'next/link';
import {MyPost} from "../interfaces";

interface PostsPageProps {
	posts: MyPost[]
}

export default function Posts({ posts }: PostsPageProps) {
	return (
		<MainLayout>
			<h1>Posts</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<Link href={`/post/${post.id}`}><a>{post.title}</a></Link>
					</li>
				))}
			</ul>
		</MainLayout>
	)
}

/**
 * Этот метод getInitialProps выполнит логику на бэкенде, и то что он вернет, этот объект будет доступен в пропсах компонента Posts
 * Это нужно для SEO оптимизации, чтобы контент сразу был в разметке.
 * */
Posts.getInitialProps = async () => {

	/**
	 * запрос делается на фейковый сервер (я запустил команды npm run dev и npm run mock в двух консолях, что запустило два http сервера,
	 * один на 3000 порту, другой на 3004).
	 * Фейковый сервер - это пакет json-server (дока на гитхабе).
	 * posts в урле - это поле в db.json в корне. Чтобы обратится к другому полю, нужно так-же вставить его в урл.
	 * */
	const response = await fetch(`${process.env.API_URL}/posts`);
	const posts: MyPost[] = await response.json();

	return {
		posts
	}
}
