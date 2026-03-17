import { ViewAreaProvider } from "@/share/components/providers/view-area-provider";
import MainLayoutComponent from "@/share/components/layout/main-layout/MainLayout";
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <ViewAreaProvider className="relative mx-auto min-h-screen w-full max-w-xl overflow-hidden bg-[white]">
            <MainLayoutComponent>{children}</MainLayoutComponent>
        </ViewAreaProvider>
    );
}