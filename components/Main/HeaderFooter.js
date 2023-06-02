import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HeaderFooter() {
	const router = useRouter();
	return <>
		<nav>
			<ul>
				<li className={router.pathname === '/' ? 'active' : ''}>
					<Link href="/" passHref>Отели</Link>
				</li>
				<li className={router.pathname === '/countries' ? 'active' : ''}>
					<Link href="/about" passHref>Страны</Link>
				</li>
				<li className={router.pathname === '/avia' ? 'active' : ''}>
					<Link href="/contacts" passHref>Авиа</Link>
				</li>
				<li className={router.pathname === '/tours' ? 'active' : ''}>
					<Link href="/contacts" passHref>Каталог туров</Link>
				</li>
				<li className={router.pathname === '/agents' ? 'active' : ''}>
					<Link href="/contacts" passHref>Агентам</Link>
				</li>
				<li className={router.pathname === '/about' ? 'active' : ''}>
					<Link href="/contacts" passHref>О нас</Link>
				</li>
				<li className={router.pathname === '/blog' ? 'active' : ''}>
					<Link href="/contacts" passHref>Блог</Link>
				</li>
				<li className={router.pathname === '/faq' ? 'active' : ''}>
					<Link href="/contacts" passHref>FAQ</Link>
				</li>
				<li className={router.pathname === '/contacts' ? 'active' : ''}>
					<Link href="/contacts" passHref>Контакты</Link>
				</li>
			</ul>
		</nav>
	</>;
}