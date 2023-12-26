export default function Header() {
  return (
    <div className="w-full h-36 flex flex-col justify-center items-center">
      <div className="w-full h-3/4 grid grid-cols-3 justify-center items-center">
        <div className="col-span-1"></div>
        <img
          src="/assets/logo.png"
          className="w-72 col-span-1 flex items-center gap-2 justify-self-center"
          alt="logo"
        />
        <div className="mr-10 flex gap-8 justify-self-end">
          <span className="material-symbols-outlined scale-125">search</span>
          <span className="material-symbols-outlined scale-125">
            shopping_bag
          </span>
        </div>
      </div>
      <div className="w-screen p-5 h-1/4 bg-teal-800 flex gap-8 justify-center items-center text-sm text-teal-50">
        <p>EASY TO CARE PLANTS</p>
        <p>PET-SAFE PLANTS</p>
        <p>SUCCULENTS</p>
        <p>PALMS</p>
        <p></p>
      </div>
    </div>
  );
}
