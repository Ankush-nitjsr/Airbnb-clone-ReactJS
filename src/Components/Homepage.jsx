const Homepage = () => {
  return (
    <div className="bg-black text-white px-[80px] pt-[16px] h-screen">
      <nav className="flex justify-between h-[48px] items-center mb-[24px]">
        <div>
          <img className="h-[32px]" src="/Vector.png" alt="airbnb logo" />
        </div>
        <div>
          <ul className="space-x-[32px]">
            <li className="inline">Places to stay</li>
            <li className="inline">Experiences</li>
            <li className="inline">Online Experiences</li>
          </ul>
        </div>
        <div>
          <ul className="space-x-[16px]">
            <li className="inline">Become a Host</li>
            <li className="inline">
              <img className="inline" src="/globe.png" alt="web icon" />
            </li>
            <li className="inline bg-white h-[48px] p-3 rounded-3xl">
              <img className="inline" src="/menu.png" alt="menu icon" />
              <img className="inline" src="/Avatar.png" alt="avatar icon" />
            </li>
          </ul>
        </div>
      </nav>
      <div className="flex items-center rounded-[1000px] h-[64px] space-x-[32px] mx-[216px] mb-[24px] py-[14px] pl-8 pr-2 bg-white text-black ">
        <div className="border-r-[2px] w-[28%]">
          <strong>Location</strong>
          <p>Where are you going?</p>
        </div>
        <div className="border-r-[2px] w-[20%]">
          <strong>Check in</strong>
          <p>Add dates</p>
        </div>
        <div className="border-r-[2px] w-[20%]">
          <strong>Check out</strong>
          <p>Add dates</p>
        </div>
        <div className="flex w-[32%]">
          <div>
            <strong>Guests</strong>
            <p>Add guests</p>
          </div>
          <button className="ml-[37%]">
            <img src="/search_button_icon.png" alt="search icon" />
          </button>
        </div>
      </div>
      <div className="h-[640px] bg-cover bg-no-repeat bg-[url('/HomePageImg.png')] ">
        <h1 className="relative top-[70%] left-[25%] text-5xl">
          Not sure where to go? Perfect.
        </h1>
        <button className="relative top-[75%] left-[42%] text-xl bg-white text-[#671296] px-12 py-2 rounded-3xl">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Homepage;
