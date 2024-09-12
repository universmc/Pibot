```javascript
import 'bootstrap/dist/css/bootstrap.min.css';

const serviceCards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Service 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
        {/* Repeat for other services */}
      </div>
    </div>
  );
};

export default serviceCards;
```