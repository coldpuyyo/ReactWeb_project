import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DetailMain from './DetailMain';

const MovieDetail = () => {
    const [movieData, setMovieData] = useState(null);

    useEffect(() => {
        const fetchMovieData = async () => {
            try {
                const response = await axios.get(
                    'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json',
                    {
                        params: {
                            key: '9e037ee8fdf1169bb3f094f4112acfc1',
                            targetDt: '20250228',
                        },
                    }
                );
                const movies = response.data.boxOfficeResult.weeklyBoxOfficeList;
                if (movies.length > 0) {
                    setMovieData(movies[0]);
                    // 0 번째 데이터 가져오기 나중에 해당 영화클릭시 데이터 받아야함
                }
            } catch (error) {
                console.error('데이터 가져오기 실패:', error);
            }
        };

        fetchMovieData();
    }, []);

    return <>
        {movieData && <DetailMain movie={movieData} />
        }</>;
};

export default MovieDetail;
