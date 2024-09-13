import EmailBanner from "./components/EmailBanner";
import NavSection from "./components/NavSection";
import SocialSection from "./components/SocialSection";
import MainSection from "./components/MainSection";
import MouseFollower from "./components/MouseFollower";
function App() {
	return (
		<div className="w-screen h-lvh">
			<MouseFollower />
			<div className="w-full h-full overflow-y-scroll blackCurrantBg custom-scrollbar">
				<EmailBanner />
				<div className="flex mt-[62px]">
					<NavSection />
					<MainSection />
					<SocialSection />
				</div>
			</div>
		</div>
	);
}

export default App;
