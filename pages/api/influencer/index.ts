import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopInfuencers } from 'utils/influencerService';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  var {
    query: { group, top },
  } = req;
  group = Array.isArray(group) ? group[0] : group;
  top = Array.isArray(top) ? top[0] : top;

  if (group == undefined || top == undefined) return res.status(403).json({ error: 'missing mandatory fields group and top' });

  getTopInfuencers(group, top).then((result) => {
    res.status(200).json(result);
  });
}
