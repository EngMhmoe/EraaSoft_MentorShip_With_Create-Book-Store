export default function InputSubmit({ name, t }) {
  return (
    <button
      id="submit"
      type="submit"
      className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25"
    >
      {t(`${name}`)}
    </button>
  );
}
