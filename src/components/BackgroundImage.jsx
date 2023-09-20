

import Image1 from "../assets/img/Bg1.jpg";
import PageTitle from "./PageTitle";

const BackgroundImage = () => {

  return (
    <div className="h-96 bg-bottom overflow-hidden" style={{ backgroundSize:"cover",backgroundRepeat:"no-repeat", backgroundImage:` URL(${Image1})`}}>
      
    </div>
  );
};

export default BackgroundImage;