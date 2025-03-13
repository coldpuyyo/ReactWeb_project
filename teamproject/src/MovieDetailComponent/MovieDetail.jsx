import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailMain from './DetailMain';

const MovieDetail = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(
                    'http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
                    {
                        params: {
                            key: '9e037ee8fdf1169bb3f094f4112acfc1',
                            movieCd: '20244821',
                        },
                    }
                );
                const movieInfo = response.data.movieInfoResult.movieInfo;
                setMovieData(movieInfo); // 요부분 이제 클릭한 영화 상세정보

            } catch (error) {
                console.error('데이터 가져오기 실패:', error);
            }
        };

        fetchMovieData();
    }, []);

    return <>
        {movieData && <DetailMain movie={movieData} />}

    </>;
};

export default MovieDetail;
