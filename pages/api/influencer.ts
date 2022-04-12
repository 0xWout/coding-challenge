import Influencer from 'model/influencer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { filterDataByXGroupByY } from 'utils/influencerService';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  filterDataByXGroupByY('category1', 'followers').then(
    (result: Influencer[]) => {
      res.status(200).json(result);
    },
  );
}
