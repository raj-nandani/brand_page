const HeroSection = () => {
    return(
         <main className="Hero container">
            <div className="Hero-content">
                <h1>YOUR FEET DESERVES THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP
                     YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST
                     AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                     <div className="hero-btn">
                        <button>Shop now</button>
                        <button className="secondary-btn">category</button>
                     </div>
                     <div className="shopping">
                        <p>Also avialble on</p>
                        <div className="brand-icons">
                            <img src="./images/amazon.png"alt="amazon-logo"/>
                            <img src="./images/flipkart.png"alt="amazon-logo"/>
                        </div>
                     </div>
            </div>
            <div className="Hero-image"><img src="./images/shoe_image.png"alt="Shoe"/> </div>
         </main>
    );
};

export default HeroSection;