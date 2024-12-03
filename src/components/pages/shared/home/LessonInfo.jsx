export default function LessonInfo({Icon, title}) {
    return (
        <article
            className="flex-container-content flex p-5 text-secondary transition-colors duration-300 gap-5 md:justify-between justify-start  items-center">
            <Icon className="text-6xl text-primary"/>
            <div className="flex flex-col gap-3">
                <span className="text-xl text-color12 font-bold font-roboto-slab">{title}</span>
            </div>
        </article>
    )
}