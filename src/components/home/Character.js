export default function Character(props) {
    const {character} = props;
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="profile-card-2">
                    <img src={
                            character.image
                        }
                        className="img img-responsive"/>
                   
                    <div className="profile-name">
                        {
                        character.name
                        } 
                    </div>
                    <div className="profile-username">
                        {
                        character.status == 'Alive' ? (
                            <div>
                                <span className="badge bg-success text-white">Con Vida</span>
                            </div>
                        ) : character.status == 'Dead' ? (
                            <div>
                                <span className="badge bg-danger text-white">Sin Vida</span>
                            </div>
                        ) : (
                            <div>
                                <span className="badge bg-warning text-dark">Desconocido</span>
                            </div>
                        )
                    } </div>
                </div>
            </div>
        </>
    )
}
