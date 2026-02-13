export default function RestPasswordHeader({ t }) {
  return (
    <header className="flex flex-col gap-4">
      <h1 className="font-semibold text-[#D9176C]">
        {t("Reset your password")}!
      </h1>

      <p className="text-gray-400">
        {t("Enter the 4 dights code that you received on your email")}
      </p>
    </header>
  );
}
