export default function Footer() {
  return (
    <div className="w-full mt-10">
      <div className="p-12 px-60 w-full bg-teal-800 text-teal-50 flex justify-center max-[1100px]:px-8">
        <div className="w-full max-w-[70rem] flex justify-center items-center gap-6 max-[1100px]:flex-col">
          <h2 className="text-2xl font-bold">Join Our Green Community</h2>
          <p className="max-[1100px]:text-center">
            Sign up to receive exclusive updates on new arrivals, plant care
            tips, and special offers!
          </p>
          <div className="flex justify-center gap-3 w-1/3 max-[1100px]:w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 bg-slate-50 border border-slate-500 text-slate-900 text-sm rounded-lg focus:outline-0"
            />
            <button className="text-sm hover:text-teal-200 transition-all">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-slate-800">
        <div className="p-12 px-60 w-full max-w-[100rem] flex max-[1100px]:flex-col max-[1100px]:px-20">
          <div className="w-full flex gap-16 max-[1100px]:justify-center">
            <ul className="flex flex-col gap-2">
              <h3 className="font-bold mb-1 text-lg">HELP</h3>
              <li>Shipping</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <h3 className="font-bold mb-1 text-lg">COMPANY</h3>
              <li>Our Story</li>
              <li>Blog</li>
              <li>Reviews</li>
              <li>Press</li>
              <li>Locations</li>
            </ul>
          </div>
          <div className="w-1/2 flex flex-col gap-2 max-[1100px]:w-full max-[1100px]:mt-20 max-[1100px]:text-center">
            <h3 className="font-bold mb-1 text-lg">OUR MISSION</h3>
            <p>
              Recognizing the profound impact of plants on well-being, Bark &
              Blooms is dedicated to soothing the mind and purifying the air
              through the beauty of greenery. Discover a lifestyle where the
              essence of nature meets elegant style.
            </p>
          </div>
        </div>
      </div>
      <div className="p-3 w-full bg-teal-800 text-teal-50 text-sm">
        <div className="flex justify-center items-center gap-2 justify-self-center">
          <span>tarikkocar © 2023</span>
          <a
            href="https://github.com/tarikkocar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/assets/github-gray.svg"
              alt="GitHub logo"
              className="w-5 h-auto hover:scale-110 transition-all invert-[98%] sepia-[20%] saturate-[224%] hue-rotate-[77deg] brightness-[101%] contrast-[98%]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
