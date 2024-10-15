"use client";
import ListBlog from "@/components/blog/ListBlog";
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";

const page = () => {
    return (
        <div>
            <Header />
            
            <div className="container pb-5">
                <ListBlog />
            </div>

            <Footer />
        </div>
    );
}

export default page;