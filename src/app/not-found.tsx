"use client"

import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import NotFound from "@/components/notfound/NotFound"

const notFound = () => {

    return (
        <div>
            <Header />

            <div className="container">
                <NotFound />
            </div>

            <Footer />

        </div>
    );

}


export default notFound;