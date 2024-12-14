function HeroVideo() {
  return (
    <div className="w-full h-[100vh] ">
      {/* <video
        src="/hero.mp4"
        loop
        autoPlay
        muted
        className="filter grayscale object-cover w-full h-screen"
      /> */}
      <video
        src="/hero.mp4"
        className="filter grayscale object-cover w-full h-full"
      />
    </div>
  );
}
export default HeroVideo;
