export default function Img({ size }) {
  return (
    <div className="absolute  left-0 top-0  bg-red-500 z-1">
      <img
        src="../../public/images/img2.png"
        alt=""
        className={`w-screen h-${size}`}
      />
    </div>
  );
}
