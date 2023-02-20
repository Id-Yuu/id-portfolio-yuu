import "./style.scss";

//api
import { Certificate_data as cd_ } from "../../api/Certification";

// animate
import Mtion from "../../components/Animated/Motion";

const Certification = () => {
  return (
    <Mtion>
      <section id="section-certificate">
        <h1>Certificate</h1>
        <div className="content-certificate">
          {cd_.map((idc) => (
            <div className="item-certificate" key={idc.id}>
              <div className="img-certificate">
                <img src={idc.cImg} alt={idc.cName} />
              </div>
              <p>{idc.cName}</p>
            </div>
          ))}
        </div>
      </section>
    </Mtion>
  );
};

export default Certification;
