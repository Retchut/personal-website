import React from 'react';

import { HomeData } from '../../Assets/Data/HomeData.js'

function Home(){
    return (
        <>
            <h1>Home sweet home</h1>
            <hr></hr>
            <div className="row">
                <div className="col pb-4">
                    <div className="background-box rounded mr-3 p-4">
                        {HomeData.welcome.map((paragraph, index) => {
                                return (<p key={"welcome-" + index}>{paragraph}</p>)
                            }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;