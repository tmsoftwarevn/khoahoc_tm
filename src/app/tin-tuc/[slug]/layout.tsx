type Props = {
    params: {
        slug: string;
    };
};

export async function generateMetadata({ params }: Props) {

    

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>{children}</div>;
}
