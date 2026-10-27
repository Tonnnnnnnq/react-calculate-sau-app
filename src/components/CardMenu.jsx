export default function CardMenu({ pImage, pTitle, pDescription }) {
  return (
    <div className="w-[250px] border-2 border-gray-300 rounded-2xl flex flex-col items-center gap-2 p-5">
      <img src={pImage} alt="Card" className="w-[200px]" />
      <p className="font-bold font-kanit">
        {pTitle}
      </p>
      <p className="font-itim text-sm text-gray-500 text-center">
        {pDescription}
      </p>
    </div>
  );
}