"use client";
import Blogdetail from "@/components/blog/DetailBlog";
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";

const DetailBlog = () => {
    return (
        <div>
            <ScrollGlobal>

            
            <Header />

            <Blogdetail />

            <Footer />

            </ScrollGlobal>

            <Social />

        </div>
    );
}

export default DetailBlog;