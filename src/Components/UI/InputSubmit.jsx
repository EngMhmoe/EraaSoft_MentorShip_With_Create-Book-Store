export default function InputSubmit({ name }) {
  return (
    <button
      type="submit"
      className="font-bold text-xl capitalize btn hover:bg-[#b31157] bg-[#D9176C] text-white w-full rounded-lg py-6.25"
    >
      {name}
    </button>
  );
}
