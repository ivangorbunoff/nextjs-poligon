import {MainLayout} from "../components/MainLayout";
import Link from "next/link";
import classes from '../styles/error.module.scss'; // classes - объект с классами, к которым применятся стили из CSS модуля error.module.css

/**
 * Страница 404 просто создается в директории pages
 * */

export default function ErrorPage() {
	return (
		<MainLayout>
			<h1 className={classes.error}>Error 404</h1>
			<p><Link href={'/'}><a className={'back'}>Home</a></Link></p>
		</MainLayout>
	)
}
