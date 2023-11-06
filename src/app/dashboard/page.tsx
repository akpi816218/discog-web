import Nav from '@/components/Nav';
import RootLayout from '../layout';
import Dashboard from './Dashboard';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<RootLayout>
			{/* <Nav /> */}
			<Dashboard />
			{/* <Footer /> */}
		</RootLayout>
	);
}
