import Router from 'next/router'; // класс Router используется для програмной навигации ( типа как barba.go(url) )
import {MainLayout} from "../../components/MainLayout";

export default function About() {

    const onClick = () => {
        Router.push('/');
    }

    return (
        <MainLayout title={'About page'}>
            <h1>About</h1>
            <button onClick={onClick}>Go back to home</button>
        </MainLayout>
    )
}
