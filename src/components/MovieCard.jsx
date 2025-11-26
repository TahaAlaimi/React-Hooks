
const MovieCard = ({card}) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card" style={{ width: '100%' }}>
                <img src={card.imageUrl} className="card-img-top" alt="Movie" />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
                    <p className="card-text">Rate: {card.rate}</p>
                    <a href="#" className="btn btn-primary">Watch</a>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
