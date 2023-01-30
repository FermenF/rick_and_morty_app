import './main.css';

export default function SearchBar() {
    return (
        <>
            <header id="header" className="header d-flex fixed-top">
                <div className="container-fluid">
                    <div className="row">
                        <div className='col-md-4 text-center'>
                           <h6 className='title-ram'>Rick And Morty</h6>
                        </div>
                        <div className='col-md-8 text-center form-group'>
                            <form>
                                <input type="text" name="name" className="search-bar" placeholder="Nombre del personaje" required="" />
                            </form>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
