import Divider from "./components/Divider";

function Item({
  title,
  desc,
  link,
}: {
  title: string;
  desc?: string;
  link?: string;
}) {
  return (
    <>
      <a href={link}>
        <div className="group border-1 p-2 rounded-lg my-3">
          <h2>{title}</h2>
          <Divider className="group-hover:w-full! w-[0px]! duration-300" />
          <p className="max-h-0 group-hover:max-h-[200px] overflow-hidden duration-300 transition-all group-hover:py-3">
            {desc}

            {link && (
              <p className={"text-blue" + (desc ? " mt-4" : "")}>
                <a href={link}>{link}</a>
              </p>
            )}
          </p>
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
      <div className="flex h-screen">
        {/* Left */}
        <div className="h-full p-2 flex-grow">
          <h1 className="font-semibold">gakuseh</h1>
          <Divider className="mb-6" />

          <div>
            <Item title="Github" link="https://github.com/gakuseh/" />
            <Item
              title="yonpun!"
              desc="Free and gratis automatic timeblocking."
              link="https://github.com/gakuseh/yonpun"
            />
            <Item
              title="Photography"
              desc="Some photos I've taken"
              link="https://flickr.com/photos/gakuseh/"
            />
            <Item title="Contact" desc="Email: eric@gakuseh.dev" />
          </div>
        </div>

        {/* Right */}
        <img
          src={randomElement}
          className="h-screen w-auto aspect-square bg-blue"
        ></img>
      </div>
    </>
  );
}

export default Index;
