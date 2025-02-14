import "./HeroPage.css";
import heroimage from "./hero_image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroPage() {
  const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
{ text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
{ text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
{ text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
{ text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
{ text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
{ text: "Failure is simply the opportunity to begin again, this time more intelligently.", author: "Henry Ford" },
{ text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
{ text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
{ text: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
{ text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
{ text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
{ text: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
{ text: "Dream big and dare to fail.", author: "Norman Vaughan" },
{ text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
{ text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
{ text: "Act as if what you do makes a difference. It does.", author: "William James" },
{ text: "Success is how high you bounce when you hit bottom.", author: "George S. Patton" },
{ text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
{ text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }


  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="h-[550px] mb-36 mt-10">
      <div className="flex relative">
        <img src={heroimage} className="w-full opacity-75" alt="Hero" />
        <div className="absolute px-3 mt-24 ml-24">
          <h1 className="text-white text-5xl font-bold leading-relaxed">
            Your Gateway to <br /> Innovation and <br /> Success
            Revolutionizing <br /> Learning and Software <br /> Solutions
          </h1>
        </div>
      </div>
      <div className=" ">
        <Slider {...sliderSettings} className="row my-16 w-[80%] h-[150px] pr-12 overflow-hidden horizontal-band mx-auto   ">
          {quotes.map((quote, index) => (
            <div key={index} className="text-center  w-[75%] h-[150px]   text-lg pr-12 font-medium flex items-center justify-center mt-4 text-white py-4">
              <p className="text-3xl px-12 font-serif">“{quote.text}”</p>
              <p className="text-xl mt-2 text-end font-semibold">- {quote.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HeroPage;
