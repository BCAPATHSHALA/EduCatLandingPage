import image1 from "../../assets/img1.png";
const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="leftHero2">
        <h2>THE SCIENCE OF LEARNING</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde rem
          alias deserunt dolores laborum consequuntur est facere optio, ut dolor
          provident, asperiores iusto beatae consequatur nostrum amet
          consectetur esse omnis modi inventore culpa maxime nisi! Dolor facilis
          quisquam, iusto neque mollitia itaque consequatur consectetur
          dignissimos officiis incidunt impedit earum beatae?
        </p>
      </div>
      <div className="rightHero2">
        <div className="image">
          <img src={image1} alt="Learning" />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
