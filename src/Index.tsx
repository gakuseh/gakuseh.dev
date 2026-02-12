import Divider from "./components/Divider";

function Item({
  title,
  link,
  children,
}: {
  title: string;
  link?: string;
  children?: React.ReactNode;
}) {
  return (
    <>
      <a href={link} className="text-black!">
        <div className="group border-1 p-2 rounded-lg my-3">
          <h2>{title}</h2>
          <Divider className="md:group-hover:w-full! md:w-[0px]! md:duration-300 lg:group-hover:w-full! lg:w-[0px]! lg:duration-300" />
          <div
            className="
          md:max-h-0 md:group-hover:max-h-[200px] md:overflow-hidden md:duration-300 md:transition-all md:group-hover:py-3
          lg:max-h-0 lg:group-hover:max-h-[200px] lg:overflow-hidden lg:duration-300 lg:transition-all lg:group-hover:py-3
          "
          >
            {children}
            <div className="mt-3 text-blue">{link}</div>
          </div>
        </div>
      </a>
    </>
  );
}

function Index() {
  const images = [
    "/images/birdhouse.jpg",
    "/images/flower.jpg",
    "/images/woodpecker.jpg",
    "/images/snow.jpg",
  ];
  const randomElement = images[Math.floor(Math.random() * images.length)];

  return (
    <>
      {/* Wrapper */}
      <div className="flex h-screen flex-col md:flex-row lg:flex-row">
        {/* Top, for mobile */}
        <img
          src={randomElement}
          className="h-screen w-auto aspect-square bg-blue block lg:hidden md:hidden"
        ></img>

        {/* Left */}
        <div className="h-full p-2 flex-grow">
          <h1 className="font-semibold">gakuseh</h1>
          <Divider />
          <p>Welcome to my website!</p>
          <div>
            <Item title="Github" link="https://github.com/gakuseh/"></Item>
            <Item title="yonpun!" link="https://github.com/gakuseh/yonpun">
              Free and gratis automatic timeblocking.
            </Item>
            <Item title="Photography" link="https://flickr.com/photos/gakuseh/">
              Some photos I've taken
            </Item>
            <Item title="Contact">
              <b>E-mail:</b> eric@gakuseh.dev
            </Item>
          </div>
        </div>

        {/* Right */}
        <img
          src={randomElement}
          className="h-screen w-auto aspect-square bg-blue hidden lg:block md:block"
        ></img>
      </div>
    </>
  );
}

export default Index;
