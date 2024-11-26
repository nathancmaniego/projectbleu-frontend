import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import BarChartComponent from "./LineChart";

function App() {
    // Sample data for the charts

    return (
        <div className="container mt-5">
            <header className="text-center mb-4 p-3">

                <h1>BlueRoof Optimization System</h1>
                <p className="lead">Optimizing BlueRoof Systems using Machine Learning!</p>
            </header>

            <div className="row mt-5">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Blue Roof Optimization</h5>
                            <div style={{ height: '400px' }}>
                                <BarChartComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default App;
