import {Link} from 'react-router-dom';

export const HomePage = () => (
    <div className="home">
        <main>
            <ul>
                <li>
                    <Link to="/crs-calculator">CRS Calculator</Link>
                </li>
            </ul>
        </main>
    </div>
);
