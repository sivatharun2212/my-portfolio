import EmailBanner from "./components/EmailBanner";
import NavSection from "./components/NavSection";
import SocialSection from "./components/SocialSection";
import MainSection from "./components/MainSection";
function App() {
	return (
		<div className="w-screen h-screen">
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
