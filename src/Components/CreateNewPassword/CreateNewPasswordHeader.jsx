export default function CreateNewPasswordHeader({ t }) {
  return (
    <header className="mb-8 flex flex-col gap-4 text-center">
      <h1 className="font-semibold text-[#D9176C]">
        {t("Create new password")}!
      </h1>

      <p className="text-gray-400">
        {t(
          "Create a strong password Your new password must be different from previous one",
        )}
      </p>
    </header>
  );
}
