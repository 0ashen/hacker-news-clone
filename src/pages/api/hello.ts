// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
   counter: number;
};
let counter = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   counter++;
   res.status(200).json({ counter });
}
