export default function RequestForm (){
    return(<>
     <section className="touch-area pt-100 pb-70">
          <div className="touch-shape">
            <img src="images/touch-shape1.png" alt="Shape" />
            <img src="images/touch-shape2.png" alt="Shape" />
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="touch-content">
                  <div className="section-title">
                    <span className="sub-title">Get In Touch</span>
                    <h2>Request A Call-Back</h2>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone"
                          />
                        </div>
                      </div>
                      
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            id="your-message"
                            className="form-control"
                            rows="6"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <button type="submit" className="btn common-btn">
                          Send Message
                          <span></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="touch-img">
                  <img src="images/touch-main.jpg" alt="Touch" />
                </div>
              </div>
            </div>
          </div>
        </section>
 
    </>)
}