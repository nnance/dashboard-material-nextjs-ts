import { IDeposits } from "../../lib/deposits";
import { NextApiRequest, NextApiResponse } from "next";

const deposits: IDeposits[] = [{
  date: new Date(),
  total: 3510.00,
}];

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(deposits)
}
