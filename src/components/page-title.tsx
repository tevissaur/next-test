const PageTitle: React.FC<{ children: JSX.Element[] }> = ({ children }) => {
  return (
    <h1 className="my-7 text-center text-3xl font-bold tracking-normal text-white sm:text-[3rem]">
      {children}
    </h1>
  );
};

export default PageTitle;
