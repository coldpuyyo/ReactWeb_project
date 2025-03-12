const DetailInfo = ({ movie }) => {


    return (<>
        <h1>{movie.movieNm}</h1>
        <p>개봉일: {movie.openDt}</p>
        <p>장르:{movie.genreNm}</p>
        <p>심의수준: {movie.auditNo}</p>
        <p>설명: 아직없음</p>
        <p>설명: {movie.movieCd}</p>
        <p>설명: {movie.movieNmEn}</p>
    </>

    );
}
export default DetailInfo;