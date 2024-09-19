import { NextRequest } from 'next/server';

const IMAGE_BASE_URL = 'google.com';

export function GET(req: NextRequest) {
  const data = {
    name: 'Umbra Wallet ',
    description:
                  'Umbra Wallet: Privacy ',
    image: IMAGE_BASE_URL,
    attributes: [
      {
        trait_type: 'Type',
        value: 'hi',
      },
      {
        trait_type: 'Rarity',
        value: 'helllo',
      },
      {
        trait_type: 'okay',
        value: 'yep',
      },
      {
        trait_type: 'okay',
        value: 'okay',
      },
      {
        trait_type: 'privcy',
        value: 'focused privacy',
      },
      {
        trait_type: 'prkvacy is girst',
        value: 1.5,
      },
    ],
  };
  const id = parseInt(req.nextUrl.searchParams.get('id')!);
  const payload = data;
  payload.name += ` #${id}`;
  if (id < 6) {
    payload.image = `${IMAGE_BASE_URL}${id}.jpeg`;
  } else {
    payload.image = `${IMAGE_BASE_URL}default.jpeg`;
  }
  return Response.json(payload);
}
