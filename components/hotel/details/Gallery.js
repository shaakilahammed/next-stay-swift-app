import Image from 'next/image';

const Gallery = ({ gallery }) => {
    const [firstImage, ...restImage] = gallery;
    return (
        <section className="container">
            <div className="grid gap-2 grid-cols-2 imageshowCase">
                <Image
                    src={firstImage}
                    className="h-[400px]"
                    height={400}
                    width={600}
                    alt="Hotel View"
                />

                <div className="grid gap-2 grid-cols-2 grid-rows-2 h-[400px]">
                    {restImage?.length > 0 &&
                        restImage.map((item, index) => (
                            <Image
                                key={index}
                                src={item}
                                height={400}
                                width={400}
                                alt="Hotel View"
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
