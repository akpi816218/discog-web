import { permanentRedirect } from 'next/navigation';

export default function GET() {
	permanentRedirect('https://discog.openstatus.dev');
}
