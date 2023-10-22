const Footer = () => {
  return (
    <div className=" mb-[24px] bg-[#F9FAFB]">
      <div className="flex text-sm text-[#6B7280] border-b mx-[80px] pt-[64px] pb-[48px]">
        <div className="w-[320px] space-y-[16px]">
          <b>Support</b>
          <p>Help Center</p>
          <p>Safety information</p>
          <p>Cancellation options</p>
          <p>Our COVID-19 Response</p>
          <p>Supporting people with disabilities</p>
          <p>Report a neighborhoood concern</p>
        </div>
        <div className="w-[310px] space-y-[16px]">
          <b>Community</b>
          <p>Airbnb.org: disaster relief housing</p>
          <p>Support: Afghan refugees</p>
          <p>Celebrating diversity & belonging</p>
          <p>Combating discriminatino</p>
        </div>
        <div className="w-[310px] space-y-[16px]">
          <b>Hosting</b>
          <p>Try hosting</p>
          <p>AirCover: protection for Hosts</p>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>
        <div className="w-[310px] space-y-[16px]">
          <b>About</b>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Careers</p>
          <p>Investors</p>
          <p>Airbnb Luxe</p>
        </div>
      </div>
      <div className="flex justify-between mx-[80px] pt-[24px] pb-[24px] text-sm text-[#6B7280]">
        <div>
          <ul className="space-x-[10px]">
            <li className="inline">2022 Airbnb.Inc</li>
            <li className="inline">Privacy</li>
            <li className="inline">Terms</li>
            <li className="inline">Sitemap</li>
          </ul>
        </div>
        <div className="flex space-x-[20px]">
          <div className="flex">
            <img src="/globe2.png" alt="web icon for language" />
            <span>English</span>
          </div>
          <div className="flex">
            <img src="/dollar.png" alt="currency icon" />
            <span>USD</span>
          </div>
          <div className="flex">
            <img src="/facebook.png" alt="facebook icon" />
            <img src="/twitter.png" alt="twitter icon" />
            <img src="/instagram.png" alt="instagram icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
