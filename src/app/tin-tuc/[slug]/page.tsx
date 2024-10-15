"use client"
import Footer from "@/components/layout user/footer/Footer"
import Header from "@/components/layout user/header/Header";
import DetailBlog from "@/components/blog/DetailBlog"

import LoadingCss from "@/components/loading/LoadingCss";
import NotFound from "@/components/notfound/NotFound"
import { useEffect, useState } from "react";
type Props = {
    params: {
        slug: string;
    };
};
const Detail_Blog = ({ params }: Props) => {
    const slug = params.slug;
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();
    useEffect(() => {
        const fetch_detail = async () => {
            const res = await fetch(
                `${process.env.URL_BACKEND}/api/v1/baiviet/${slug}`
            );
            const result = await res.json();
            if (result && result.data) {
                setLoading(false)
                setDetail(result.data);
            } else {
                setErr(true)
            }
        };
        fetch_detail();
    }, [slug])

    if (err && loading === true) return (
        <>
            <Header />

            <div className="container">
                <NotFound />
            </div>

            <Footer />


        </>
    )
    if (loading) return <LoadingCss />

    return (
        <div>
            <Header />

            <div className="container">
                <DetailBlog detail={detail} slug={slug} />
            </div>

            <Footer />
        </div>
    );
}

export default Detail_Blog;