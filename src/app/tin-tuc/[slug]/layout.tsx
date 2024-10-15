type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {

    // fetch data
    const res = await fetch(
        `${process.env.URL_BACKEND}/api/v1/baiviet/${params.slug}`
    );
    const result = await res.json();
    if (result && result.EC === 1) {
        return {
            title: result?.data.tieude,
            description: result?.data.meta_des,
            keywords: result?.data.key_word,
            openGraph: {
                images: `${process.env.URL_BACKEND}/images/${result?.data.thumbnail}`,
            },
            robots: {
                index: true,
                follow: true,
                nocache: true,
                googleBot: {
                    index: true,
                    follow: false,
                    noimageindex: true,
                    'max-video-preview': -1,
                    'max-image-preview': 'large',
                    'max-snippet': -1,
                },
            },
        };
    }

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
