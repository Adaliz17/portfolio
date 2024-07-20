import profile from '../../../assets/images/file.jpg'

export const CardProfile = () => {
  return (
    <div className="card mb-3 m-auto" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <img
            src={profile}
            className="rounded-start img-fluid"
            alt="..."
          />
        </div>
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">Adaliz C. Membreño Pérez</h5>
            <p className="card-text">
              Desarrollador web frontend. Listo para enfrentar nuevos desafío,
              siempre enfocado en aprender cosas nuevas y dar lo mejor de mi en
              cualquier tarea que se me asigne!
            </p>
            <p className="card-text">
              <small className="text-body-secondary">
              Front-End Developer | React | JS | TS | React Native | Flutter
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
