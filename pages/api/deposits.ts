import { IDeposits } from "../structs/deposits";

const deposits: IDeposits[] = [{
  date: new Date(),
  total: 3510.00,
}];

export default (req, res) => {
  res.status(200).json(deposits)
}
