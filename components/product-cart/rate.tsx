const Rate = ({ rate, rateCount }: { rate: number; rateCount: number }) => {
  return (
    <div className="relative mt-2">
      <span className="bg-[url('/images/five-star-gray.png')] inline-block w-24 h-4"></span>
      <span
        style={{ width: (rate * 96) / 5 + "px" }}
        className="bg-[url('/images/five-star-gold.png')] h-4 inline-block absolute top-[1px] left-0"
      ></span>
      <span className="text-gray-400 mx-3 text-sm">{rateCount}</span>
    </div>
  );
};

export default Rate;
