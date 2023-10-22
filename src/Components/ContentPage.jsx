const ContentPage = () => {
  return (
    <div className="my-[111px] mx-[80px]">
      <section className="my-[96px]">
        <h1 className="text-4xl mb-[48px]">Inspiration for your next trip</h1>
        <div className="flex gap-[24px]">
          <div className="h-[400px] w-[302px]">
            <div className="h-[50%]">
              <img src="/Rectangle1.png" />
            </div>
            <div className="bg-[#CC2D4A] h-[50%] p-[16px] pt-[24px]">
              <strong className="text-4xl text-white">Nashville</strong>
              <h3 className="text-xl text-white mt-[8px]">53 miles away</h3>
            </div>
          </div>
          <div className="h-[400px] w-[302px]">
            <div className="h-[50%]">
              <img src="/Rectangle2.png" />
            </div>
            <div className="bg-[#BC1A6E] h-[50%] p-[16px] pt-[24px]">
              <strong className="text-4xl text-white">South Haven</strong>
              <h3 className="text-xl text-white mt-[8px]">168 miles away</h3>
            </div>
          </div>
          <div className="h-[400px] w-[302px]">
            <div className="h-[50%]">
              <img src="/Rectangle3.png" />
            </div>
            <div className="bg-[#DE3151] h-[50%] p-[16px] pt-[24px]">
              <strong className="text-4xl text-white">Stanton</strong>
              <h3 className="text-xl text-white mt-[8px]">192 miles away</h3>
            </div>
          </div>
          <div className="h-[400px] w-[302px]">
            <div className="h-[50%]">
              <img src="/Rectangle4.png" />
            </div>
            <div className="bg-[#D93B30] h-[50%] p-[16px] pt-[24px]">
              <strong className="text-4xl text-white">New Buffalo</strong>
              <h3 className="text-xl text-white mt-[8px]">130 miles away</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[96px]">
        <h1 className="text-4xl mb-[48px]">Discover Airbnb Experiences</h1>
        <div className="flex space-x-[32px]">
          <div className="h-[628px] w-[628px] bg-cover bg-no-repeat bg-[url('/img1.png')] p-[80px]">
            <h1 className="text-5xl mb-[24px] pt-[64px] text-white">
              Things to do on your trip
            </h1>
            <button className="bg-white text-black h-[56px] w-[135px] rounded-lg">
              Experiences
            </button>
          </div>
          <div className="h-[628px] w-[628px] bg-center bg-no-repeat bg-[url('/img2.png')] p-[80px]">
            <h1 className="text-5xl mb-[24px] pt-[64px] text-white">
              Things to do from home
            </h1>
            <button className="bg-white text-black h-[56px] p-4 rounded-lg">
              Online Experiences
            </button>
          </div>
        </div>
      </section>
      <section className="my-[96px]">
        <div className="flex h-[320px] space-x-[48px]">
          <div>
            <h1 className="text-5xl mb-[24px] pt-[64px]">
              Shop Airbnb gift cards
            </h1>
            <button className="bg-black text-white h-[56px] w-[135px] rounded-xl">
              Learn more
            </button>
          </div>
          <div className="flex grow justify-end">
            <img src="/GiftCards.png" alt="airbnb gift cards" />
          </div>
        </div>
      </section>
      <section>
        <div className="h-[628px] w-[100%] bg-center bg-no-repeat bg-[url('/lastImg.png')] p-[80px] rounded-md">
          <h1 className="text-8xl mb-[24px] text-white w-[465px]">
            Questions about hosting
          </h1>
          <button className="bg-white text-black h-[56px] rounded-xl px-[24px] py-[16px]">
            Ask a Superhost
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContentPage;
