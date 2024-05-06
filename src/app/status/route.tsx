import { permanentRedirect } from 'next/navigation';

export async function GET() {
	permanentRedirect('https://discog.openstatus.dev');
}
