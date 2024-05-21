

function renderLists()
{
    const anime = [
        {name:"Solo levelling", rating:"8.31",link:"https://myanimelist.net/anime/52299/Ore_dake_Level_Up_na_Ken?cat=anime"} ,
        {name:"Sword art online", rating:"7.21",link:"https://myanimelist.net/anime/11757/Sword_Art_Online"} ,
        {name:"Overlord IV", rating:"8.08",link:"https://myanimelist.net/anime/48895/Overlord_IV"} ,
        {name:"Shangrila frontier", rating:"8.09",link:"https://myanimelist.net/anime/52347/Shangri-La_Frontier__Kusoge_Hunter_Kamige_ni_Idoman_to_su"},
        {name:"Dragon ball Super", rating:"7.44",link:"https://myanimelist.net/anime/30694/Dragon_Ball_Super?suggestion="}
    ]
    anime.sort((a,b)=> a.name.localeCompare(a.name));
    const listAnime = anime.map(a => <option>{a.name} | {a.rating} </option>);
    return(
        <>
            <select>
                {listAnime}
            </select>
        </>
    )
}
export default renderLists