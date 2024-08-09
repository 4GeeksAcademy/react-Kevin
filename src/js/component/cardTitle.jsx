import React from "react";
import img_2 from "../../img/pexels-jeremy-bishop-1260133-27585251.jpg";
export function CardTitle() {
    return (
 <div className="container-fluid">
  <div className="row d-flex justify-content-center">
    <div className="col-md-3">
      <div className="card">
        <img src={img_2}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img src={img_2}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
        <img src={img_2}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="card">
       <img src={img_2}/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default CardTitle;