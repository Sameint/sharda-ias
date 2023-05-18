import React from "react";
import "./main.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function main() {
  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "400px",
  };
  const slideImages = [
    {
      url: "https://scontent.flko9-1.fna.fbcdn.net/v/t31.18172-8/26116370_1391886414256994_7070262142471105632_o.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=qV_ViGtzMQEAX9LVGvp&_nc_ht=scontent.flko9-1.fna&oh=00_AfAOUOpPsBv4yiiFL30F9oMV4lD2yFMv07XrOXn-o7H5Wg&oe=648D88E9",
    },
    {
      url: "https://scontent.flko9-2.fna.fbcdn.net/v/t39.30808-6/317936231_572492854884759_3949674489337065989_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=UvHWyRK8qyQAX-psp7W&_nc_ht=scontent.flko9-2.fna&oh=00_AfDNg9NOQKAnEoYp8Dghu8T-Ux5i8bvjIHpwef7dIvFfYQ&oe=646B4D85",
    },
    {
      url: "https://scontent.flko9-1.fna.fbcdn.net/v/t39.30808-6/309431720_519242700209775_2565778179357583372_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=FFhRT3ZBFdIAX9UH1Kf&_nc_ht=scontent.flko9-1.fna&oh=00_AfBNQLQf9dQ0fMktrG3Wthsawwn1tOHzTe_lQJ0e7rLfJA&oe=646BD24C",
    },
  ];
  return (
    <div className="App">
      {/* ...................Header */}
      <header className="top">
        <div className="header_flex">
          <div className="logo">
            <img src="https://scontent.flko9-2.fna.fbcdn.net/v/t39.30808-6/308554797_504956728305039_7526681556422093132_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=RwKgc_6UgJoAX_fyzcr&_nc_ht=scontent.flko9-2.fna&oh=00_AfDyn5Oyv3Scshe39gd89KtJ_Dp7CtpkWFjvnXbP6B_XHg&oe=646AB90A" />
            <h5>
              <span style={{ color: "black" }}>SHARDA</span> I.A.S/P.C.S
            </h5>
          </div>
          <div className="list_bar">
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">CONTACT</a>
            <a href="https://api.whatsapp.com/send/?phone=9453627059&text&type=phone_number&app_absent=0" class="navbar-link" data-nav-link> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>  94536 27059</a>
          </div>
        </div>
      </header>

      {/* ...................Main */}
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="card_box">
        <h1>OUR COURSES</h1>
      </div>

      {/* ...................Footer */}

      <footer className="footer"></footer>
    </div>
  );
}

export default main;
