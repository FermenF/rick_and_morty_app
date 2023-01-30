
export const characters = async ( pageNumber='', name='' ) => {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${ pageNumber }&name=${ name }`)
        const characters = await response.json();
        return { characters };
    
    } catch (error) {
        
    }
};