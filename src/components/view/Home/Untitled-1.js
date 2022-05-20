<section className="custom-container use-cases-sec">
    <h1 className="H1 pb-lg-5 pb-3 pt-4" style={{ fontSize: "50px" }}> Use Cases</h1>
    <div className="row g-5">
        {caseCard.map(({ id, url, title, img }) => (
            <div to="" className="col-md-6" key={id}>
                <div className="use-card" style={{ cursor: 'pointer', backgroundImage: "url('/images/Rectangle 223.png')", }}>
                    <div className="use-card-desc">
                        <h2 className="H2 text-white" style={{ fontSize: "32px", paddingLeft: "30px", paddingTop: "20px" }}> {title}</h2>
                        <Link to={url}>
                            <span className="H6 pt-3 learn-more-btn" style={{ color: '#69d0ff', fontSize: "15px", paddingLeft: "30px", paddingTop: "20px" }}>
                                Learn More ⟶{' '}
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
    <br />
    <br />
    <br />
</section>