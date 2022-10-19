const Footer = () => {
  return (
    <div className="flex justify-end items-center bottom-0 bg-yellow-100 mt-auto">
      <div>
        <h1>Check Out The Project on Github!</h1>
      </div>
      <div className="m-5">
        <a href="https://github.com/BananaBuilder">
          <img className="h-10 w-10" src="/github.png"></img>
        </a>
      </div>
    </div>
  );
};

export default Footer;
