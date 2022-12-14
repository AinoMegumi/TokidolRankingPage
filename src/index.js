import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './css/style.css';
import PageHeaderItem from './header.js';
import PageFooterItem from './footer.js';
import IndexItem from './main/index.js';
import LiveUploadItem from './main/live.js';
import TermItem from './main/term.js';
import PrivacyPolicyItem from './main/privacy.js';
import RankingItem from './main/ranking.js';
import VersionItem from './main/version.js';
import ProducerSearchItem from './main/producer.js';

const root = ReactDOM.createRoot(document.getElementById('content'));

const App = () => {
    return (
        <Router>
            <PageHeaderItem />
            <main>
                <Routes>
                    <Route path="/" element={<IndexItem />} />
                    <Route path="/live" element={<LiveUploadItem />} />
                    <Route path="/term" element={<TermItem />} />
                    <Route path="/privacy" element={<PrivacyPolicyItem />} />
                    <Route path="/ranking" element={<RankingItem />} />
                    <Route path="/version" element={<VersionItem />} />
                    <Route path="/search_producer" element={<ProducerSearchItem />} />
                </Routes>
            </main>
            <PageFooterItem />
        </Router>
    );
};

root.render(<React.StrictMode>{App()}</React.StrictMode>);
