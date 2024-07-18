import React from 'react';
import Layout from './Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import JoinView from './views/JoinView';
import LoginView from './views/LoginView';
import ScrollToTop from './ScrollToTop';
import BaseballView from './views/BaseBallView';
import BaseBallDetailView from './views/BaseBallDetailView';
import BaseballHomeView from './views/BaseballHomeView';
import BaseBallHistoryView from './views/BaseBallHistoryView';
import BoardListView from './views/BoardListView';
import BoardWriteView from './views/BoardWriteView';
import BoardDetailView from './views/BoardDetailView';
import BoardModifyView from './views/BoardModifyView';
import MedicineView from './views/MedicineView';
import MedicineHomeView from './components/medicine/MedicineHomeView';
import MedicineHistoryView from './components/medicine/MedicineHistoryView';
import MedicineFamilyView from './components/medicine/MedicineFamilyView';
import MedicineProductsView from './components/medicine/MedicineProductsView';
import MedicineLocationView from './components/medicine/MedicineLocationView';
import MedicineIngredientsView from './components/medicine/MedicineIngredientsView';
import MedicineDetailView from './components/medicine/MedicineDetailView';
import MembersView from './views/MembersView';
import Members from './components/members/Members';
import QuestionView from './components/members/QuestionView';
import BenefitView from './components/members/BenefitView';
import LocationDetail from './components/members/LocationDetail';
import UpDown from './views/UpDown';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomeView />} />
					<Route
						path="/baseballhome"
						element={<BaseballHomeView />}
					/>
					<Route path="/baseball" element={<BaseballView />} />
					<Route
						path="/player/:id"
						element={<BaseBallDetailView />}
					/>
					<Route
						path="/baseballhistory"
						element={<BaseBallHistoryView />}
					/>
					<Route path="medicine" element={<MedicineView />}>
						<Route index element={<MedicineHomeView />} />
						<Route
							path="history"
							element={<MedicineHistoryView />}
						/>
						<Route path="family" element={<MedicineFamilyView />} />
						<Route
							path="products"
							element={<MedicineProductsView />}
						/>
						<Route
							path="products/:name"
							element={<MedicineDetailView />}
						/>
						<Route
							path="location"
							element={<MedicineLocationView />}
						/>
						<Route
							path="ingredients"
							element={<MedicineIngredientsView />}
						/>
					</Route>
					<Route path="/join" element={<JoinView />} />
					<Route path="/login" element={<LoginView />} />
					<Route path="/updown" element={ <UpDown /> } />
					<Route path="/board" element={<BoardListView />} />
					<Route path="/boardwrite" element={<BoardWriteView />} />
					<Route
						path="/boardDetail/:subject"
						element={<BoardDetailView />}
					/>
					<Route
						path="/boardModify/:subject"
						element={<BoardModifyView />}
					/>
					<Route path="/member" element={<MembersView />}>
						<Route path="/member/members" element={<Members />} />
						<Route
							path="/member/question"
							element={<QuestionView />}
						/>
						<Route
							path="/member/benefit"
							element={<BenefitView />}
						/>
						<Route
							path="/member/detail/:num"
							element={<LocationDetail />}
						/>
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
