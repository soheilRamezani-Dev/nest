const SubscribeForm = () => {
  return (
    <div className="relative lg:w-2/3 text-sm xl:text-lg">
      <input
        className="w-full rounded-full py-3 xl:py-5 px-5 focus:outline-none"
        type="text"
        placeholder="Your Email Address"
      />
      <button className="bg-green-600 text-white py-3 xl:py-5 px-5 rounded-full absolute right-0">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeForm;
