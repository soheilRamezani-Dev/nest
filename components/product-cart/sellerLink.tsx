const SellerLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <div className="mt-2 text-sm">
      <a href={link}>
        <span className="text-gray-400">By</span>
        <span className="text-green-600 hover:text-orange-400 mx-2 transition-all duration-300">
          {title}
        </span>
      </a>
    </div>
  );
};

export default SellerLink;
