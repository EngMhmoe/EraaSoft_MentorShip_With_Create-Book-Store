export default function TooltipAddToCartANDWishList({ name, t }) {
  return (
    <div className="tooltip-content">
      <div className="animate-bounce text-orange-400 -rotate-5 text-xl font-black">
        {t(`${name}`)}!
      </div>
    </div>
  );
}
