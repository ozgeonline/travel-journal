function Separate(props){
  return(
    <div className="card">
      <img src={props.imageUrl} alt="japan-img" className="img-card"/>
      <div className="card-content">
        <p>
          <i class="fa-solid fa-location-dot"></i>
          <span className="location">{props.location}</span>
          <a href={props.googleMapsUrl} className="maps-url">View on Google Maps</a>
        </p>
        <h1 className="title">{props.title}</h1>
        <p className="date">{props.startDate}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}

export default Separate;