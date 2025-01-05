function HeroVideo() {
  return (
    <div className="w-screen min-h-[calc(100vh-55px]  ">
      {/* <video
        src="/hero.mp4"
        loop
        autoPlay
        muted
        className="filter grayscale object-cover w-full h-screen"
      /> */}
      <video
        src="/hero.mp4"
        muted
        className="filter grayscale object-cover w-full h-[calc(100vh-55px)] "
      />
    </div>
  );
}
export default HeroVideo;
