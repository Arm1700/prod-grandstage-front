
export default function MainPhoto() {

    return (
        <section className="flex uppercase justify-center flex-col text-pseudo overflow-hidden">
            <video
                autoPlay
                muted
                loop
                preload="auto"
                playsInline
                className="lg:absolute top-0 left-0 min-w-full lg:h-full object-cover pointer-events-none"
                poster={'/images/DSC07939.jpg'}
            >
                <source src={'/images/DSC07939.jpg'} type="video/mp4"/>
            </video>
        </section>
    );
}
