export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className=" tw-flex tw-justify-center tw-items-center">
      <div className="max-mobile:tw-w-full tablet:tw-w-3/4 laptop:tw-w-2/4 desktop:tw-w-1/4 tw-bg-color tw-p-4 tw-mt-4 max-mobile:tw-mt-0 tablet:tw-mt-10 labtop:tw-mt-20 tablet:tw-rounded-lg tw-shadow-lg">
        {children}
      </div>
    </section>
  );
}
