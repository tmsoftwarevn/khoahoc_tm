"use client";
import ListBlog from "@/components/blog/ListBlog";
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import ScrollGlobal from "@/ui/scroll/ScrollGlobal";
import Social from "@/components/social/Social";
import { useEffect } from "react";

const page = () => {
   
    return (
        <div>
            <ScrollGlobal>


                <Header />

                <div className="container pb-5">
                    <ListBlog />
                </div>

                <Footer />

            </ScrollGlobal>

            <Social />
        </div>
    );
}

export default page;