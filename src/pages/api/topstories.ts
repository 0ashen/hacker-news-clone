import type { NextApiRequest, NextApiResponse } from 'next';
import { Server, Dataset } from 'server';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
   const data = await Server.getDataSet(Dataset.TopStories);
   res.status(200).json(data);
}
