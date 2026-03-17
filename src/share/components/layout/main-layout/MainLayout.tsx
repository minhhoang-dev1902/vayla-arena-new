import Header from "./Header";
import BottomNav from "./BottomNav";

export default function MainLayoutComponent({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen">
			<Header />
			<main className="pt-14 pb-16">{children}</main>
			<BottomNav />
		</div>
	);
}