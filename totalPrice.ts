type TotalPriceProps = {
  price: number;
  discount: number;
  isInstallment: boolean;
  months?: number;
};

const totalPrice = ({
  price,
  discount,
  isInstallment = false,
  months = 1,
}: TotalPriceProps): number => {
  const discountedPrice: number = price * ((100 - discount) / 100);
  return isInstallment ? discountedPrice / months : discountedPrice;
};

export { totalPrice, TotalPriceProps };

// totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 })
// 6250
