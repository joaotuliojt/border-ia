import { About } from "@/components/About";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { Resources } from "@/components/Resources";

export default function Home() {
    return (
        <>
            <About />
            <Resources />
            <Banner />
            <Footer />
        </>
    );
}
