import Link from 'next/link'; // Link для перехода по страницам без перезагрузки (нужно обернуть ссылку)
import {MainLayout} from "../components/MainLayout";

export default function Home() {
    return (
        <MainLayout>
            <h1>Index</h1>
            <p><Link href={'/about'}><a>about</a></Link></p>
        </MainLayout>
    )
}
