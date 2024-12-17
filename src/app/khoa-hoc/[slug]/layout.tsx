import { call_detail_course } from "@/api/CallApi";

type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {

    let result = await call_detail_course(params.slug);
    //console.log('result layout', result);
    
    if (result ) {
        return {
            title: result?.course?.course_title,
            //description: result?.course?.key_word,
            //keywords: result?.data.key_word,
            openGraph: {
                //images: `${process.env.URL_BACKEND}/images/${result?.data.thumbnail}`,
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
    children: React.ReactNode
}) {
    return (
        <div>



            {children}



        </div>
    )
}
