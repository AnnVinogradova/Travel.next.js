import HeaderFooter from '../components/Main/HeaderFooter';
import HeaderTop from '../components/Main/HeaderTop';
export default function MyApp({ Component, pageProps }) {
	return <>
		<HeaderTop />
		<HeaderFooter />
		<Component{...pageProps} />
	</>
}