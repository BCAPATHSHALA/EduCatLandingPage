const Hero1 = () => {
  return (
    <div className="hero1">
      <div className="leftHero1">
        <h2>
          EDUCATION <span>WORLD</span>
        </h2>
        <p>Because learning changes everything</p>
      </div>
      <div className="rightHero1">
        <form>
          <h2>Get in Touch</h2>
          <input type="text" placeholder="Name" maxLength={20}/>
          <input type="email" placeholder="Email" maxLength={35}/>
          <input className="message" type="text" placeholder="Message" maxLength={100}/>
          <button>SEND</button>
        </form>
      </div>
    </div>
  );
};

export default Hero1;
