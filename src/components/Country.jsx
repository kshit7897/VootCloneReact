import React from "react";
import Slider from "react-slick";

const Country = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div>
      <div className="sport-slider-main">
        <div className="sport-head">
          <h2>Country Collection</h2>
        </div>
        <Slider {...settings} className="sport-slider-div">
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://img.freepik.com/premium-vector/flag-usa-united-states-america-background_53500-169.jpg?w=2000"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="data:image/png;base64,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"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://cdn.britannica.com/44/344-050-94536674/Flag-England.jpg?w=400&h=235&c=crop"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://media.istockphoto.com/photos/flag-of-russia-picture-id489481953?k=20&m=489481953&s=612x612&w=0&h=_fxq--gIkMUt4bnhujwK1LDd_hA8Wk1qu5XlGQntsgI="
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/800px-Flag_of_North_Korea.svg.png"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://m.media-amazon.com/images/I/71MRg4Sj+9L._SL1500_.jpg"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://media.istockphoto.com/photos/united-arab-emirates-flag-picture-id1180612997?k=20&m=1180612997&s=612x612&w=0&h=k6X2GD7kAQQDd9mO3-kPV6KpUHPh6NEgqMhDxMn84kU="
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="data:image/png;base64,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"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://media.istockphoto.com/vectors/vector-national-flag-of-zimbabwe-vector-id696630606?k=20&m=696630606&s=612x612&w=0&h=Ot7ES8g4HfgEieWw3i9kVSci0M3OZDQ-Rx4jkdphpIA="
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="https://think360studio-media.s3.ap-south-1.amazonaws.com/download/india-flag-2021-wallpaper-1.png"
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA21BMVEUAek3eODEAI5X///8AAAD/thIAd0lJknHdKB4ABJAAdVAAd0//uQv/uxIAekz/vhMAbzreNC0AbjgAcj8AHJP7sxL4+/rPpyYofkoAdUTt9PHbFgVbm31Ul3h7jz3UqSRlSAe9hw2mxrdeQweMlDnerCBXPgbzrRFQOQavfQzhU05Bjmssf0lzp47A18xkoITfQjz43t3toqDGjg5+kDz66ehiRgfiV1KkxbWQlTjp6/Sfpc05SaIvQJ8fNJva3eyEjMD21NPrk5HgSUTuqqeVm8goO50WLpnO0eVG5/PrAAAEo0lEQVR4nO3dh1pTQRCG4WXYBNGIEWxRUGxgodh77/d/RZ5QQpLdzdl+dmfmvwL4nvfZBD1FiJb195d1+/7s3BLWtSURYjQ60Fb5cety1z98orU3EWJ4eE0X5TlWKjZNqFGxaiLEOiUqlk1IUbFtQulUsW8i+lSoODQhQ8WpCREqbk0aKpv4qbg2ofAB5NyEABWPJuip+DTBTsWvCW4qnk1QU/FuIkYbWKn4NzFT+Vk5lZAmWKkENUFKRVwIi2Ki8qJiKuJ6aBV8VMSgd/s8U5mZ6PUG4VS2UFFpmvTCqfRRURk3GVNZYyqTHTdhKtM7aZKQyuvqqEyaMJXJzpowldNNN4lC5V79VGaaMJWjzTVhKktqE6aia8JUxO5FTZVkVJ7UQEXIl5eYyuyElNs9HZU7dKk0TaSWSq/3KpTKsFIqR03k9tUUVNaGWzdrpHLcJBmVKk+V0yaJqIjhSn1UJk1SURnVd6pMNUl2qtRGZbqJlHd1VAapqPwqlMpsE6Yy3lyTVFRM31WKpKI0YSqaJkxF14Q6FW0T4lQMTeSbNFQ2DFTelkTF1CQZlfXyqZibJKPytHQqC5qQPVUWNiFKZXETE5UHqKm0NZH3tVQe3kBMpbUJQSoWTfJT6Xg2TZJRMXxX6Xp2TTJT6XiWTdJRedd1AXXWTQhRsW9Ch4pLEypUnJoQoeLYRO4koSKKouLaJN3X2nKouDdJRKWgU8WjCfpTxauJ3NFeBYflVPFrYqLyPvh6lZUC5tskFZV+AfNuIuXjJFRKmH+TVFS6X0ATtFSCmiClEtYEJ5XQJvIRPirBTRBSidDERGWvVioxmmCjEqcJLiqRmqCiEq0JIirxmuChErMJFipRmyChErlJQ2VQPZXYTaTc1UkZ7HX9izosdhF2oozPk/nx544yFEgEf4/VLVoSLEgE/12sW5wkiJAI/nc23SIkwYVERGiC8L94GIk6RqKOkahjJOoYibrCkHR9jdJ4fD2bOr7uUR1fH6uOr6NWx9fbq+P7MtTx/Tvq+D4vdXw/oDq+b1Qd31+sju9DV9ft8woKRLJs1yQvkg+fVjtecc8/+bh6BTpeYc/JaZB0XaS9CTkk0NYk73O3ikACLU3yPp+tDCSwsAlNJLCoSd7nPRaDBMxN8j4XtCAkYGxC9CQ5XgHPGS4LCeibkEYCuibEkYCmCXUkoDRhJDDfJO/7MopEArNNMiP5XCQSmGmS9/07pSKBqSZ539NULhI4a5L3fV6/y0UCp03yvvetaCRw0iTv+wHLRgJHTfK+R7J0JDBukvd9o8UjaZb3vbQVIGmW9f3FNSABXRPiSEBtQh4JKE0YCcw1YSRHEzmQfP1TDxKYbhIDyUH9SGCqCSOZTDASZeIEiWAkkwlGokwwEmUiHMkIFZJmIhzJJiokzUKLoEPSLKyIEcmXapFAYBOMSCCsCUokENLEhORb3UggoAlWJODdZDTCigR8myBGAn5NUCMBrya4kYBHE+xIwL0JeiTg2qSPHwk4Nhke4kcCTk1oIAGXJiYkf3EhAfsmBD5uJrNMsk4GCVg2oYQE7JrQOUmOx0jUtSbp72uL/MOKpNl/yO7pjEPx/2sAAAAASUVORK5CYII="
              alt="#"
            />
          </div>
          <div className="img-s-div">
            <img
              className="dummy-img"
              src="data:image/png;base64,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"
              alt="#"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Country;
