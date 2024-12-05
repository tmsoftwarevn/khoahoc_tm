"use client";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

const page = () => {
    return (
        <div>
            <ScrollGlobal>

                <Header />

                <Contact />

                <Footer />
            </ScrollGlobal>
            <Social />
        </div>
    );
};

export default page;
