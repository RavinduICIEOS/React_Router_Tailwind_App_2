import { currencyFormatter } from "../util/formatting";
import Button from "./Button";

export default function CartItem({
  name,
  quantity,
  price,
  onIncrease,
  onDecrease,
}) {
  return (
    <li className="flex justify-between items-center py-4 border-b border-gray-400">
      <div>
        <p className="text-lg font-semibold text-gray-900">{name}</p>
        <p className="text-sm  text-gray-900">
          {quantity} x {currencyFormatter.format(price)}
        </p>
      </div>

      <div className="flex items-center space-x-2 ">
        <Button
        className="px-2 py-0"
        textOnly
          onClick={onDecrease}
        >
          -
        </Button>

        <span className="text-lg font-semibold text-gray-700">{quantity}</span>
        <Button
        className="px-2 py-0"
        textOnly
          onClick={onIncrease}
        >
          +
        </Button>
      </div>
    </li>
  );
}