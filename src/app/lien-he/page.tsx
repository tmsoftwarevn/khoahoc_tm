"use client";

import Contact from "@/components/contact/Contact";
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

import Test from "@/ui/test/Test";


const page = () => {
    return (
        <div>
           
            <ScrollGlobal>

                <Header />


                <Contact />
                <Test />

                <Footer />
            </ScrollGlobal>
            <Social />
        </div>
    );
};

export default page;
